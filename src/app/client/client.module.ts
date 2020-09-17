import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './layout/home/home.component';
import { ContentComponent } from './layout/content/content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ContentComponent}
];
@NgModule({
  declarations: [HomeComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ClientModule { }
