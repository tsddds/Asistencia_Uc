import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {

  username: string = '';
  password: string = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { } 
  ngOnInit() {
    
  }
//Verificar si el usuario y la contraseña son correctos
  SignIn() {
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

 //Restablecer contraseña
  async resetPassword() {
    const alert = await this.alertController.create({
      header: 'Restablecer contraseña',
      message: 'Se enviará un enlace para restablecer tu contraseña al correo electrónico asociado a tu cuenta.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Enviar',
          handler: () => {
            console.log('Enviar enlace de restablecimiento de contraseña');
            // Aquí iría la lógica para enviar el correo de restablecimiento
          }
        }
      ]
    });

    await alert.present();
  }
  //Navegaciones
  goHome() {
    this.navCtrl.navigateRoot('/home'); 
  }
  goBack() {
    this.navCtrl.navigateRoot('/home'); 
  }
  Login() {
    this.router.navigate(['/login']); 
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
