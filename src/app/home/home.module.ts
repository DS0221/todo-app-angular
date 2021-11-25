import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeBodyComponent } from './home-body/home-body.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
