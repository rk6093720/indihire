import {  Component } from '@angular/core';
// import  Swiper  from 'swiper';
// import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app'
  image:String[]=[
      "https://indihire.com/wp-content/uploads/2022/03/market-research.png",
      "https://indihire.com/wp-content/uploads/2022/03/finest-talent.png",
      "https://indihire.com/wp-content/uploads/2022/03/deep-domain.png",
      "https://indihire.com/wp-content/uploads/2022/06/IndiHire-Icons-Copy-20.png",
      "https://indihire.com/wp-content/uploads/2022/05/work-at-indihire.png",
      "https://indihire.com/wp-content/uploads/2023/04/sales-hiring-01.png",
      "https://indihire.com/wp-content/uploads/2022/05/employees.png"

  ]
  currentIndex: number = 0;

  increaseIndex() {
    this.currentIndex = (this.currentIndex + 1) % this.image.length;
  }

  decreaseIndex() {
    this.currentIndex = (this.currentIndex - 1 + this.image.length) % this.image.length;
  }

}
