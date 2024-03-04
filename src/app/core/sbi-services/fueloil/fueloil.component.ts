import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fueloil',
  templateUrl: './fueloil.component.html',
  styleUrls: ['./fueloil.component.css']
})
export class FueloilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoPage(data: any){
    console.log("output", data );
    this.router.navigateByUrl(data);
  }
}
