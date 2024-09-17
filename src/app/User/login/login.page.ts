import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { } 
  //registro
  Login() {
    if (this.username === 'Usuario1' && this.password === 'MiClav3') {
      // Guardar el nombre de usuario en localStorage
      localStorage.setItem('username', this.username);
      localStorage.setItem('currentPassword', this.password);
      console.log('Credenciales correctas');
      this.goHome();
    } else {
      this.presentAlert('Error de inicio de sesión', 'Usuario o contraseña incorrectos');
    }
  }
 //Navegaciones
 goHome() {
  this.navCtrl.navigateRoot('/home'); 
}
goBack() {
  this.navCtrl.navigateRoot('/home'); 
}
inicioSeccion(){
  this.router.navigate(['/sign']);
}
//Alertas
async presentAlert(header: string, message: string) {
  const alert = await this.alertController.create({
    header: header,
    message: message,
    buttons: ['OK']
  });
  await alert.present();
}
//Mostrar contraseña
togglePasswordVisibility() {
  if (this.passwordType === 'password') {
    this.passwordType = 'text';
    this.passwordIcon = 'eye';
  } else {
    this.passwordType = 'password';
    this.passwordIcon = 'eye-off';
  }
}
}
