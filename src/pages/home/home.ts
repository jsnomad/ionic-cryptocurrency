import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CoinProvider } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private coinList: any = [];
  constructor(private coinProvider: CoinProvider) {
    this.loadCoin();
  }

  private async loadCoin(refresher?) {
    this.coinList = await this.coinProvider.getAllCoin();
    if (refresher) refresher.complete();
  }
}
