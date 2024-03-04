import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goto(routePage: string) {
    this.router.navigateByUrl(routePage);
  }
  gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;   
  } 
}
