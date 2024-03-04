import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
const materialModules = [

  MatIconModule,
 MatTabsModule

]

@NgModule({
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
  declarations: [],
  
})
export class AppMaterialModule { }
