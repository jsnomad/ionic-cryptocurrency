import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevisePage } from './devise';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [DevisePage],
  imports: [IonicPageModule.forChild(DevisePage), ComponentsModule]
})
export class DevisePageModule {}
