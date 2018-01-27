import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageHelper } from '../../helper/image.helper';
import { CoinProvider } from '../../providers/coinmarketcap/coin.provider';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private coinList: any = [];
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private coinProvider: CoinProvider,
    private imageHelper: ImageHelper
  ) {
    this.loadCoin();
  }

  private async loadCoin() {
    this.coinList = await this.coinProvider.getAllCoin();
  }
}
