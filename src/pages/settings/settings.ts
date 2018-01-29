import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private selectedTheme: String;
  private isDark: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingsProvider
  ) {
    this.settings.getActiveTheme().subscribe(val => {
      this.selectedTheme = val;
      this.isDark = this.selectedTheme === 'dark-theme' ? true : false;
    });
  }

  private toggleAppTheme() {
    if (this.isDark) {
      this.settings.setActiveTheme('dark-theme');
    } else {
      this.settings.setActiveTheme('light-theme');
    }
  }
}
