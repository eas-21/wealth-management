import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vermicompost',
  templateUrl: './vermicompost.component.html',
  styleUrls: ['./vermicompost.component.css']
})
export class VermicompostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoPage(data: any){
    console.log("output", data );
    this.router.navigateByUrl(data);
  }
}
