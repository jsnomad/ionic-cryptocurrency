import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class CoinProvider {
  constructor(private api: Api) {}

  public getAllCoin(): Promise<ArrayBuffer> {
    return this.api.get('ticker/?convert=EUR').toPromise();
  }
}
