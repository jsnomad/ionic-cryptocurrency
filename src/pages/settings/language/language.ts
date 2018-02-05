import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
    private settingsProvider: SettingsProvider,
    private translate: TranslateService
  ) {
    this.init();
  }

  private async init() {
    this.languages = availableLanguages;
  }

  private async changeLanguage(selectedLanguage: any) {
    this.translate.use(selectedLanguage.code);
    await this.settingsProvider.setValue('language', selectedLanguage);
  }
}
