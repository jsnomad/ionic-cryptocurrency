/* IONIC / ANGULAR */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* CONSTANT */
import { availableTheme } from './app.constant';

/* APP */
import { CryptocurrencyApp } from './app.component';

/* HELPER */
import { ImageHelper } from '../helper/image.helper';
import { PriceHelper } from '../helper/price.helper';

/* PROVIDER */
import { Api, CoinProvider, SettingsProvider } from '../providers/providers';

/* SHARED MODULES */
import { ComponentsModule } from '../components/components.module';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  return new SettingsProvider(storage, {
    theme: availableTheme.Light,
    currency: {
      code: 'usd',
      name: 'Dollar',
      symbol: '$'
    },
    language: {
      code: 'en',
      name: 'English'
    }
  });
}

@NgModule({
  declarations: [CryptocurrencyApp],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(CryptocurrencyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [CryptocurrencyApp],
  providers: [
    Api,
    CoinProvider,
    SplashScreen,
    StatusBar,
    ImageHelper,
    PriceHelper,
    { provide: SettingsProvider, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
