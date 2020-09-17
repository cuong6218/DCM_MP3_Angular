import { HomeComponent } from './client/layout/home/home.component';
import { MasterComponent } from './server/layout/master/master.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'admin', component: MasterComponent,
  loadChildren: () => import('./server/server.module').then(m => m.ServerModule)},
  {path: 'home', component: HomeComponent,
  loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
