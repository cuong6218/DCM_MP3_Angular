import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './layout/master/master.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent},
];
@NgModule({
  declarations: [MasterComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ServerModule { }
