import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private isDark: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingsProvider
  ) {
    this.getActiveTheme();
  }

  private getActiveTheme() {
    this.settings.getActiveTheme().subscribe(theme => {
      this.isDark = theme === 'dark-theme' ? true : false;
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
