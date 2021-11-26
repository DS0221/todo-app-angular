import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBodyComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule
  ]
})
export class HomeModule { }
