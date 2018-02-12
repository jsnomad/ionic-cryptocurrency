import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencyPage } from './currency';
import { ComponentsModule } from '../../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CurrencyPage],
  imports: [
    IonicPageModule.forChild(CurrencyPage),
    ComponentsModule,
    TranslateModule.forChild()
  ]
})
export class CurrencyPageModule {}
