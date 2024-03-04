import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VermicompostComponent } from '../vermicompost/vermicompost.component';
import { FueloilComponent } from '../fueloil/fueloil.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoPage(data: any){
    console.log("output", data );
    this.router.navigateByUrl(data);
  }
}
