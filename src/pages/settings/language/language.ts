import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from '../../../providers/providers';
import { availableLanguages } from '../../../app/app.constant';

@IonicPage()
@Component({
  selector: 'page-language',
  templateUrl: 'language.html'
})
export class LanguagePage {
  private languages = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settingsProvider: SettingsProvider,
    private translate: TranslateService
  ) {
    this.init();
  }

  private async init() {
    const currentLanguage = await this.settingsProvider.getValue('language');
    this.languages = availableLanguages.map(lang => {
      return {
        code: lang.code,
        name: lang.name,
        isChecked: this.isChecked(currentLanguage, lang.code)
      };
    });
  }

  private isChecked(currentLanguage: string, language: string) {
    return currentLanguage === language;
  }

  private async changeLanguage(selectedLanguage: string) {
    this.translate.use(selectedLanguage);
    await this.settingsProvider.setValue('language', selectedLanguage);
  }
}
