import { Component, Input } from '@angular/core';
import { ImageHelper } from '../../helper/image.helper';

@Component({
  selector: 'coin-card',
  templateUrl: 'coin-card.html'
})
export class CoinCardComponent {
  @Input() coinData: any;

  constructor(private imageHelper: ImageHelper) {}

  private getPriceColor(price: number): string {
    switch (Math.sign(price)) {
      case 1:
        return 'price-up';
      case -1:
        return 'price-down';
      case 0:
        return 'price-no-change';
      default:
        return 'price-no-change';
    }
  }
}
