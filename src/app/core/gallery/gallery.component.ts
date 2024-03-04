import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],


})
export class GalleryComponent implements OnInit {
  gallery =
    [{
      heading: 'picture 1',
      url: 'assets/images/service-1.jpg',
      project: 'Complete Projects'
    },
    {
      heading: 'picture 2',
      url: 'assets/images/service-2.jpg',
      project: 'Ongoing Projects'
    },
    {
      heading: 'picture 3',
      url: 'assets/images/service-3.jpg',
      project: 'Complete Projects'
    },
    {
      heading: 'picture 4',
      url: 'assets/images/service-4.jpg',
      project: 'Ongoing Projects'
    },
    {
      heading: 'picture 5',
      url: 'assets/images/service-5.jpg',
      project: 'Complete Projects'
    },
    {
      heading: 'picture 6',
      url: 'assets/images/service-6.jpg',
      project: 'Ongoing Projects'
    }
    ]
  filterBy: string = "";
  public projects: any = [];


  constructor() { }

  ngOnInit(): void {
    this.projects = this.gallery;
  }
  openProjects(projectValue: any) {
    if (projectValue != 'All') {
      console.log("value", projectValue);
      this.filterBy = projectValue;
      this.projects = this.gallery.filter((obj: any) => obj.project == projectValue);
      console.log("Projects", this.projects);
    }
    else if (projectValue === 'All') {
      this.projects = this.gallery;
    }
  }
  gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;   
  } 
}
