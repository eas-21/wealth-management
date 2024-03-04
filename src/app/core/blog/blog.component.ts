import { Component, OnInit } from '@angular/core';
// declare function greet(): void;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
public all: any = true;
completedProjects = false;
ongoingProjects = false;
public projectvalue:any = 'All';
  constructor() {
    // greet();
    this.projectvalue === 'All'
    this.all = true;
    this.completedProjects = true;
    this.ongoingProjects = true;
   this.openProjects('All');
   }

  ngOnInit(): void {
   
  }
  openProjects(projectvalue: any) {
    // Declare all variables
 console.log(projectvalue);
 if(projectvalue === 'All'){
  this.all = true;
  this.completedProjects = true;
  this.ongoingProjects = true;
  console.log(projectvalue, this.all);
 }
 else if(projectvalue === 'Complete Projects'){
  this.all = false;
  this.completedProjects = true;
  this.ongoingProjects = false;
 }
 else if(projectvalue === 'Ongoing Projects'){
  this.all = false;
  this.completedProjects = false;
  this.ongoingProjects = true;
 }
  }
  gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // return this.document.body.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   inline: 'start'
    // })
  } 
}
