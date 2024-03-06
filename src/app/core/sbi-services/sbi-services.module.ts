import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    RouterLink,
    RouterModule,
  ]
})
export class SbiServicesModule { }
