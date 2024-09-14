import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private navCtrl: NavController) {}

  resetPassword() {
    if (this.email) {
      console.log('Enlace de restablecimiento enviado a', this.email);
      alert('Enlace de restablecimiento enviado a tu correo');
      this.navCtrl.navigateForward('/login');
    } else {
      alert('Por favor, ingresa un correo válido');
    }
  }
}
