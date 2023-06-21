import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-casa-sanjose',
  templateUrl: './casa-sanjose.component.html',
  styleUrls: ['./casa-sanjose.component.scss']
})
export class CasaSanjoseComponent implements OnInit {



  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  galleryThumbnailsComponent: NgxGalleryThumbnailsComponent[];


  constructor() { }

  ngOnInit(){

    this.galleryOptions = [
      {
        width: '85%',
        height: '450px',
        thumbnailsColumns: 5,
        thumbnailsRows: 1,
        imageArrowsAutoHide: true,
        thumbnailsArrowsAutoHide: true,
        thumbnailsMoveSize: 1,
        thumbnailsRemainingCount: true,
        previewCloseOnEsc: true,
        arrowPrevIcon: "fa fa-chevron-circle-left",
        arrowNextIcon: "fa fa-chevron-circle-right",
        imageAnimation: NgxGalleryAnimation.Slide

      },

      // max-width 800
      {
          breakpoint: 800,
          width: '50%',
          height: '300px',
          imagePercent: 80,

      },
      // max-width 400
      {
          breakpoint: 300,
          preview: false
      }
  ];

    this.galleryImages = [

     {
          small: 'assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg',
          medium: 'assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg', //fachada
           big: 'assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg'
      },
      {
        small: 'assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg',
        medium: 'assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg',  //sala
         big: 'assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg'
      },
      {
        small:'assets/img/casasanj/habita1-Casasan jose-hospedaje-santamarta-colombia.jpg',
        medium:'assets/img/casasanj/habita1-Casasan jose-hospedaje-santamarta-colombia.jpg', //hab
        big:'assets/img/casasanj/habita1-Casasan jose-hospedaje-santamarta-colombia.jpg'
      },
      {
        small: 'assets/img/casasanj/habita2-Casasan jose-hospedaje-santamarta-colombia.jpg',
        medium: 'assets/img/casasanj/habita2-Casasan jose-hospedaje-santamarta-colombia.jpg', //hab
         big: 'assets/img/casasanj/habita2-Casasan jose-hospedaje-santamarta-colombia.jpg'
      },
      {
        small: 'assets/img/casasanj/habitacion-Casasan jose-hospedaje-santamarta-colombia.jpg',
        medium: 'assets/img/casasanj/habitacion-Casasan jose-hospedaje-santamarta-colombia.jpg',//hab
        big: 'assets/img/casasanj/habitacion-Casasan jose-hospedaje-santamarta-colombia.jpg'
      },
      {
        small: 'assets/img/casasanj/habitacion3-Casasan jose-hospedaje-santamarta-colombia.jpg',
        medium: 'assets/img/casasanj/habitacion3-Casasan jose-hospedaje-santamarta-colombia.jpg',//hab
        big: 'assets/img/casasanj/habitacion3-Casasan jose-hospedaje-santamarta-colombia.jpg'
      },

      {
        small: 'assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg',
        medium: 'assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg', //baño
        big: 'assets/img/casasanj/sala2-Casasan jose-hospedaje-santamarta-colombia.jpg'
      },
      {
        small: 'assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg',
        medium: 'assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg', //baño
        big: 'assets/img/casasanj/sala3-Casasan jose-hospedaje-santamarta-colombia.jpg'
      },

    ];


  }

}
