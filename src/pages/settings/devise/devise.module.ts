import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevisePage } from './devise';
import { ComponentsModule } from '../../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DevisePage],
  imports: [
    IonicPageModule.forChild(DevisePage),
    ComponentsModule,
    TranslateModule.forChild()
  ]
})
export class DevisePageModule {}
