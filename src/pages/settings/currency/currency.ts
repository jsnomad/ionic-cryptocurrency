import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SettingsProvider } from '../../../providers/providers';
import { availableCurrency } from '../../../app/app.constant';

@IonicPage()
@Component({
  selector: 'page-currency',
  templateUrl: 'currency.html'
})
export class CurrencyPage {
  private currencies: any = [];

  constructor(private settingsProvider: SettingsProvider) {
    this.init();
  }

  private async init() {
    this.currencies = availableCurrency;
  }

  private async changeCurrency(selectedCurrency: string) {
    await this.settingsProvider.setValue('currency', selectedCurrency);
  }
}
