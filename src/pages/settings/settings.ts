import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
import { availableTheme } from '../../app/app.constant';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private isDark: boolean;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private settings: SettingsProvider,
    private statusBar: StatusBar
  ) {
    this.getActiveTheme();
  }

  private getActiveTheme() {
    this.settings.getActiveTheme().subscribe((theme: string) => {
      this.isDark = theme === availableTheme.Dark ? true : false;
    });
  }

  private toggleAppTheme() {
    if (this.isDark) {
      this.applyTheme(availableTheme.Dark);
      this.statusBar.styleLightContent();
    } else {
      this.applyTheme(availableTheme.Light);
      this.statusBar.styleDefault();
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
