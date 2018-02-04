import { NgModule } from '@angular/core';
import { CoinCardComponent } from './coin-card/coin-card';
import { IonicModule } from 'ionic-angular';
import { ListSettingsComponent } from './list-settings/list-settings';

@NgModule({
  declarations: [CoinCardComponent, ListSettingsComponent],
  imports: [IonicModule],
  exports: [CoinCardComponent, ListSettingsComponent]
})
export class ComponentsModule {}
