import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';
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
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private settings: SettingsProvider
  ) {
    this.subscribeActiveTheme();
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private subscribeActiveTheme() {
    this.settings.getActiveTheme().subscribe(val => (this.selectedTheme = val));
  }

  private openPage(page) {
    this.nav.setRoot(page.component);
  }
}
