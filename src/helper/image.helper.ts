import { Injectable } from '@angular/core';

@Injectable()
export class ImageHelper {
  private readonly BASE_IMAGE_PATH: string = 'https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/';
  private readonly DEFAULT_EXTENSION: string = 'png';

  constructor() {}

  public getCoinImage(coin: string): string {
    return `${this.BASE_IMAGE_PATH}${coin.toLowerCase()}.${
      this.DEFAULT_EXTENSION
    }`;
  }
}
