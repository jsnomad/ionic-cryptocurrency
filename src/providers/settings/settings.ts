import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingsProvider {
  private SETTINGS_KEY: string = '_settings';

  private settings: any;
  private defaults: any;
  private theme: BehaviorSubject<String>;

  constructor(public storage: Storage, defaults: any) {
    this.defaults = defaults;
    this.theme = new BehaviorSubject('light-theme');
  }

  public setActiveTheme(val) {
    this.theme.next(val);
  }

  public getActiveTheme() {
    return this.theme.asObservable();
  }

  public load() {
    return this.storage.get(this.SETTINGS_KEY).then(value => {
      if (value) {
        this.settings = value;
        return this.mergeDefaults(this.defaults);
      } else {
        return this.setAll(this.defaults).then(val => {
          this.settings = val;
        });
      }
    });
  }

  public setValue(key: string, value: any) {
    this.settings[key] = value;
    return this.storage.set(this.SETTINGS_KEY, this.settings);
  }

  public getValue(key: string) {
    return this.storage.get(this.SETTINGS_KEY).then(settings => {
      return settings[key];
    });
  }

  public getCacheValue(key: string) {
    return this.settings[key];
  }

  private mergeDefaults(defaults: any) {
    for (let k in defaults) {
      if (!(k in this.settings)) {
        this.settings[k] = defaults[k];
      }
    }
    return this.setAll(this.settings);
  }

  private setAll(value: any) {
    return this.storage.set(this.SETTINGS_KEY, value);
  }
}
