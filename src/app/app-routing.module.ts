import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',  // Redirigir a la página de login por defecto
    pathMatch: 'full'     // Verificar coincidencia exacta con la ruta vacía
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)  // Cargar el módulo de la página de inicio
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)  // Cargar el módulo de login
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule)  // Cargar el módulo de restablecimiento de contraseña
  },
  {
    path: '**',
    redirectTo: 'login',  // Cualquier ruta no existente redirige al login
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Precargar todos los módulos para mejorar el rendimiento
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
