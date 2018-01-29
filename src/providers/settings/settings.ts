import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingsProvider {
  private theme: BehaviorSubject<String>;

  constructor() {
    this.theme = new BehaviorSubject('light-theme');
  }

  public setActiveTheme(val) {
    this.theme.next(val);
  }

  public getActiveTheme() {
    return this.theme.asObservable();
  }
}
