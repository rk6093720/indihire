import { AfterViewInit, Component } from '@angular/core';
import  Swiper  from 'swiper';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  swiper: Swiper | undefined;
     ngAfterViewInit(): void {
       this.swiper = new Swiper('.swiper-container',{
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }
       })
     }
}
