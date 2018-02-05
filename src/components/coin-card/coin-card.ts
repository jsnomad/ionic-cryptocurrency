import { Component, Input } from '@angular/core';
import { ImageHelper } from '../../helper/image.helper';
import { PriceHelper } from '../../helper/price.helper';
import { SettingsProvider } from '../../providers/providers';

@Component({
  selector: 'coin-card',
  templateUrl: 'coin-card.html'
})
export class CoinCardComponent {
  @Input() coinData: any;
  private symbol: string;

  constructor(
    private imageHelper: ImageHelper,
    private priceHelper: PriceHelper,
    private settingsProvider: SettingsProvider
  ) {
    this.getSymbol();
  }

  private getSymbol() {
    const devise = this.settingsProvider.getCacheValue('devise');
    console.log(devise);
    this.symbol = devise.symbol;
  }

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
