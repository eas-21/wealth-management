import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { VermicompostComponent} from './vermicompost/vermicompost.component';
import { FueloilComponent } from './fueloil/fueloil.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sbi-services',
  templateUrl: './sbi-services.component.html',
  styleUrls: ['./sbi-services.component.css']
})
export class SbiServicesComponent implements OnInit {


  dynamicSlides = [
    {
      id: '1',
      src: 'assets/images/vehicle1.png',
      alt: 'Side 1',
      title: 'Vehicle 1',
    },
    {
      id: '2',
      src: 'assets/images/vehicle2.png',
      alt: 'Side 2',
      title: 'Vehicle 2'
    },
    {
      id: '3',
      src: 'assets/images/vehicle3.png',
      alt: 'Side 3',
      title: 'Vehicle 3'
    },
    {
      id: '4',
      src: 'assets/images/vehicle4.png',
      alt: 'Side 4',
      title: 'Vehicle 4'
    },
    {
      id: '5',
      src: 'assets/images/extruder.png',
      alt: 'Side 5',
      title: 'Extruder'
    },
    {
      id: '6',
      src: 'assets/images/boilingmachine.png',
      alt: 'slide 6',
      title: 'Boiling Machine'
    },
    {
      id: '7',
      src: 'assets/images/shredded.png',
      alt: 'slide 7',
      title: 'Shredder'
    }, {
      id: '8',
      src: 'assets/images/trommel.png',
      alt: 'slide 8',
      title: 'Trommel'
    },
    {
      id: '9',
      src: 'assets/images/vibroscreen.png',
      alt: 'slide 9',
      title: 'Vibro Screen'
    }

  ]

  constructor(private router: Router) {

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  cardOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ngOnInit(): void {

  }
  gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;   
  } 
  gotoPage(data: any){
    console.log("output", data );
    this.router.navigateByUrl(data);
  }
}
