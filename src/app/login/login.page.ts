import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  // Método para manejar el login
  login() {
    if (this.username === 'usuario' && this.password === '1234') {
      console.log('Login exitoso');

      // Guardar el nombre del usuario en localStorage
      localStorage.setItem('username', this.username);

      // Redirigir a la página de inicio
      this.navCtrl.navigateForward('/home');
    } else {
      console.log('Credenciales incorrectas');
      this.showLoginError();
    }
  }

  // Mostrar mensaje de error si las credenciales son incorrectas
  showLoginError() {
    alert('Nombre de usuario o contraseña incorrecta. Inténtalo de nuevo.');
  }

  // Navegar a la página de restablecimiento de contraseña
  navigateToResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }
}
