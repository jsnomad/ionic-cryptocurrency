import { Injectable } from '@angular/core';
import { SettingsProvider } from '../providers/settings/settings';

@Injectable()
export class PriceHelper {
  constructor(private settingsProvider: SettingsProvider) {}

  public getPriceByCurrency(coin: any) {
    const currentCurrency = this.settingsProvider.getCacheValue('currency');
    return coin['price_' + currentCurrency.code];
  }
}
