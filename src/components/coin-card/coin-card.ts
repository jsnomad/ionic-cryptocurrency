import { Component, Input } from '@angular/core';
import { ImageHelper } from '../../helper/image.helper';

@Component({
  selector: 'coin-card',
  templateUrl: 'coin-card.html'
})
export class CoinCardComponent {
  @Input() coinData: any;

  constructor(private imageHelper: ImageHelper) {}
}
