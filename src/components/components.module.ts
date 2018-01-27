import { NgModule } from '@angular/core';
import { CoinCardComponent } from './coin-card/coin-card';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [CoinCardComponent],
  imports: [IonicModule],
  exports: [CoinCardComponent]
})
export class ComponentsModule {}
