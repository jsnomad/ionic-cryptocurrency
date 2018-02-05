import { Injectable } from '@angular/core';
import { SettingsProvider } from '../providers/settings/settings';

@Injectable()
export class PriceHelper {
  constructor(private settingsProvider: SettingsProvider) {}

  public getPriceByDevise(coin: any) {
    const currentDevise = this.settingsProvider.getCacheValue('devise');
    return coin['price_' + currentDevise.code];
  }
}
