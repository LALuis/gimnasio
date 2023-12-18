import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'rutina',
        loadChildren: () => import('../rutina/rutina.module').then(m => m.RutinaPageModule)
      },
      {
        path: 'alimentacion',
        loadChildren: () => import('../alimentacion/alimentacion.module').then(m => m.AlimentacionPageModule)
      },
      {
        path: 'progreso',
        loadChildren: () => import('../progreso/progreso.module').then(m => m.ProgresoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/rutina',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/rutina',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
