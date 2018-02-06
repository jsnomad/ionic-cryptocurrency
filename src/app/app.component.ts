import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';
import { SettingsProvider } from './../providers/settings/settings';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage, availableTheme } from './app.constant';

@Component({
  templateUrl: 'app.html'
})
export class CryptocurrencyApp {
  private rootPage = 'HomePage';
  private selectedTheme: String;
  @ViewChild(Nav) private nav: Nav;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private settings: SettingsProvider,
    private translate: TranslateService,
    private config: Config
  ) {
    this.platformReady();
  }

  private async platformReady() {
    await this.platform.ready();
    await this.settings.load();
    this.initLanguage();
    this.initTranslation();
    this.initActiveTheme();
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }

  private async initActiveTheme() {
    const savedTheme = await this.settings.getValue('theme');
    this.settings.setActiveTheme(savedTheme);
    this.settings.getActiveTheme().subscribe(val => (this.selectedTheme = val));
    if (savedTheme === availableTheme.Dark) this.statusBar.styleLightContent();
  }

  private async initLanguage() {
    this.translate.setDefaultLang(defaultLanguage);
    const savedLanguage = await this.settings.getValue('language');

    if (savedLanguage) {
      this.translate.use(savedLanguage.code);
    } else {
      this.translate.use(defaultLanguage);
      this.settings.setValue('language', defaultLanguage);
    }
  }

  private initTranslation() {
    // translation back button
    this.translate.stream(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  private openPage(page) {
    this.nav.setRoot(page);
  }
}
