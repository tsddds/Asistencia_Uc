import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

interface User {
  id?: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL de la API REST
  private sessionKey = 'userSession'; // Clave para almacenar el usuario en localStorage

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          // Guardar la sesión en localStorage
          localStorage.setItem(this.sessionKey, JSON.stringify({ email: user.email }));
          return true;
        }
        return false;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  // Método para registrar un usuario
  register(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`).pipe(
      map(users => {
        if (users.length > 0) {
          throw new Error('El correo ya está registrado');
        }
        return false;
      }),
      tap(() => {
        // Hacer la solicitud POST para agregar al usuario
        const newUser: User = { email, password };
        this.http.post(this.apiUrl, newUser).subscribe();
      }),
      map(() => true),
      catchError(() => of(false))
    );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.sessionKey) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.sessionKey);
  }
}
