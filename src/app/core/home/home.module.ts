import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SbiServicesComponent } from '../sbi-services/sbi-services.component';
import { FueloilComponent } from '../sbi-services/fueloil/fueloil.component';
import { VermicompostComponent } from '../sbi-services/vermicompost/vermicompost.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TilesComponent } from '../sbi-services/tiles/tiles.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class HomeModule { }
