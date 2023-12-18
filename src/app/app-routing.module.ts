import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'rutina',
    loadChildren: () => import('./rutina/rutina.module').then( m => m.RutinaPageModule)
  },
  {
    path: 'alimentacion',
    loadChildren: () => import('./alimentacion/alimentacion.module').then( m => m.AlimentacionPageModule)
  },
  {
    path: 'progreso',
    loadChildren: () => import('./progreso/progreso.module').then( m => m.ProgresoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
