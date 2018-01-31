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
    this.settings.getActiveTheme().subscribe((theme: string) => {
      this.isDark = theme === 'dark-theme' ? true : false;
    });
  }

  private toggleAppTheme() {
    if (this.isDark) {
      this.applyTheme('dark-theme');
    } else {
      this.applyTheme('light-theme');
    }
  }

  private applyTheme(theme: string) {
    this.settings.setActiveTheme(theme);
    this.settings.setValue('theme', theme);
  }

  private navigate(page: string) {
    this.navCtrl.push(page);
  }
}
