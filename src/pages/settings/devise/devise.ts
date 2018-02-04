import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SettingsProvider } from '../../../providers/providers';
import { availableDevise } from '../../../app/app.constant';

@IonicPage()
@Component({
  selector: 'page-devise',
  templateUrl: 'devise.html'
})
export class DevisePage {
  private devises: any = [];

  constructor(private settingsProvider: SettingsProvider) {
    this.init();
  }

  private async init() {
    this.devises = availableDevise;
  }

  private async changeDevise(selectedLanguage: string) {
    await this.settingsProvider.setValue('devise', selectedLanguage);
  }
}
