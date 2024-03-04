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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLayoutComponent,
  
    ContactComponent,
    GalleryComponent,
   
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
