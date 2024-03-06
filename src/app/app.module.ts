import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { ContactComponent } from './core/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleryComponent } from './core/gallery/gallery.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { BlogComponent } from './core/blog/blog.component';
import { FueloilComponent } from './core/sbi-services/fueloil/fueloil.component';
import { VermicompostComponent } from './core/sbi-services/vermicompost/vermicompost.component';
import { TilesComponent } from './core/sbi-services/tiles/tiles.component';
import { SbiServicesComponent } from './core/sbi-services/sbi-services.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLayoutComponent,
    BlogComponent,
    ContactComponent,
    GalleryComponent,
    ScrollToTopComponent,    
   FueloilComponent,
   VermicompostComponent,
   TilesComponent,
   SbiServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    AppMaterialModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
