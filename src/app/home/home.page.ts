import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Recuperar el nombre del usuario desde localStorage
    this.username = localStorage.getItem('username') || 'Usuario';
  }

  // Función para cerrar sesión
  logout() {
    // Limpiar el nombre de usuario almacenado en localStorage
    localStorage.removeItem('username');

    // Redirigir al login
    this.navCtrl.navigateBack('/login');
  }
}
