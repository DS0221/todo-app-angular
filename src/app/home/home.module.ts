import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CommonHeaderComponent } from './common-header/common-header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBodyComponent,
    CommonHeaderComponent
  ],
  exports: [
    CommonHeaderComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class HomeModule { }
