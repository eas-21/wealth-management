import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { SbiServicesComponent } from './core/sbi-services/sbi-services.component';
import { ContactComponent } from './core/contact/contact.component';
import { BlogComponent } from './core/blog/blog.component';
import { GalleryComponent} from './core/gallery/gallery.component';
import { FueloilComponent } from './core/sbi-services/fueloil/fueloil.component';
import { VermicompostComponent} from './core/sbi-services/vermicompost/vermicompost.component';
import { TilesComponent } from './core/sbi-services/tiles/tiles.component';
const routes: Routes = [{
  path: '', component :AdminLayoutComponent,
  children: [
    {
    path: '', component:HomeComponent,
    loadChildren: ()=> import('../app/core/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'service', component:SbiServicesComponent,
    loadChildren: ()=> import('../app/core/sbi-services/sbi-services.module').then(m => m.SbiServicesModule),
    
  },
  {path:'tiles', component: TilesComponent},
  {path: 'fuel-oil', component: FueloilComponent},
  {path:'vermicompost', component: VermicompostComponent},
  {
    path: 'contact', component:ContactComponent,
    loadChildren: ()=> import('../app/core/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'project', component:BlogComponent,
    loadChildren: ()=> import('../app/core/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'gallery', component:GalleryComponent,
    loadChildren: ()=> import('../app/core/gallery/gallery.module').then(m => m.GalleryModule)
  },
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
