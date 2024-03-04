import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SbiServicesComponent } from './sbi-services.component';
import { FueloilComponent } from './fueloil/fueloil.component';
import { VermicompostComponent } from './vermicompost/vermicompost.component';
import { RouterModule, Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TilesComponent } from './tiles/tiles.component';


@NgModule({
  declarations: [SbiServicesComponent, FueloilComponent, VermicompostComponent, TilesComponent],
  imports: [
    CommonModule,
    CarouselModule,
    RouterLink,
    RouterModule,
  ]
})
export class SbiServicesModule { }
