import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importar AlertController

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  passwordType1: string = 'password';
  passwordIcon1: string = 'eye-off';

  constructor(private alertController: AlertController) { } // Inyectar AlertController

  async presentAlert(header: string, message: string) { // Método para mostrar alertas
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async changePassword() {
    const storedPassword = localStorage.getItem('currentPassword');

    if (this.oldPassword !== storedPassword) {
      await this.presentAlert('Error', 'La contraseña actual es incorrecta'); // Usar presentAlert
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      await this.presentAlert('Error', 'Las nuevas contraseñas no coinciden'); // Usar presentAlert
      return;
    }

    // Lógica para cambiar la contraseña
    localStorage.setItem('currentPassword', this.newPassword);
    await this.presentAlert('Éxito', 'Contraseña cambiada con éxito'); // Usar presentAlert
  }

  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }

  togglePasswordVisibility1() {
    if (this.passwordType1 === 'password') {
      this.passwordType1 = 'text';
      this.passwordIcon1 = 'eye';
    } else {
      this.passwordType1 = 'password';
      this.passwordIcon1 = 'eye-off';
    }
  }
}