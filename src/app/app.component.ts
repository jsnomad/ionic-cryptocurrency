import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';
import { SettingsProvider } from './../providers/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class CryptocurrencyApp {
  private rootPage = 'HomePage';
  private selectedTheme: String;
  @ViewChild(Nav) private nav: Nav;

  pages: any[] = [
    { title: 'Home', component: 'HomePage' },
    { title: 'Setting', component: 'SettingsPage' }
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private settings: SettingsProvider
  ) {
    this.platformReady();
  }

  private platformReady() {
    this.platform.ready().then(() => {
      this.initActiveTheme();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private async initActiveTheme() {
    await this.settings.load();
    const savedTheme = await this.settings.getValue('theme');
    this.settings.setActiveTheme(savedTheme);
    this.settings.getActiveTheme().subscribe(val => (this.selectedTheme = val));
  }

  private openPage(page) {
    this.nav.setRoot(page.component);
  }
}
