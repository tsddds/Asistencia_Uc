import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // Eliminamos la sección de animaciones
})
export class HomePage implements OnInit {
  username: string = '';
  isLoggedIn: boolean = false;


  constructor(private router: Router) {}

  
  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.checkLoginStatus();
  }

  // Verificar el estado de inicio de sesión
  checkLoginStatus() {
    this.username = localStorage.getItem('username') || '';
    this.isLoggedIn = !!this.username;
  }

  // Navegar a la ruta especificada
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Cerrar sesión
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('currentPassword');
    this.checkLoginStatus();
  }
}
