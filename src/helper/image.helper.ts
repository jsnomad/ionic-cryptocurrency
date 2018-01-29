import { Injectable } from '@angular/core';

@Injectable()
export class ImageHelper {
  private readonly BASE_IMAGE_PATH: string = 'https://files.coinmarketcap.com/static/img/coins/32x32/';
  private readonly DEFAULT_EXTENSION: string = 'png';

  constructor() {}

  public getCoinImage(coin: string): string {
    return `${this.BASE_IMAGE_PATH}${coin}.${this.DEFAULT_EXTENSION}`;
  }
}
