import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor() {}

  changePassword() {
    const storedPassword = localStorage.getItem('currentPassword');
    
    if (this.oldPassword !== storedPassword) {
      console.error('Current password is incorrect');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      console.error('New passwords do not match');
      return;
    }

    /* Lógica para cambiar la contraseña
    localStorage.setItem('currentPassword', this.newPassword);
    console.log('Password changed successfully');*/
  }
}