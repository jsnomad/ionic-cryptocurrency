import { Component, Input } from '@angular/core';
import { SettingsProvider } from '../../providers/providers';

@Component({
  selector: 'list-settings',
  templateUrl: 'list-settings.html'
})
export class ListSettingsComponent {
  private fctToExectute: any;
  private parent: any;
  private keyDB: any;
  private availableSettings: any[];

  private values: any = [];

  constructor(private settingsProvider: SettingsProvider) {}

  @Input()
  public set exec({ fctToExectute, thisParent, keyDB }) {
    this.fctToExectute = fctToExectute;
    this.parent = thisParent;
    this.keyDB = keyDB;
  }

  @Input()
  public set dataSetting(data: Array<any>) {
    if (data.length > 0) {
      this.availableSettings = data;
      this.init();
    }
  }

  private async init() {
    const currentValue = await this.settingsProvider.getValue(this.keyDB);
    this.values = this.availableSettings.map(lang => {
      return {
        code: lang.code,
        name: lang.name,
        isChecked: this.isChecked(currentValue, lang.code)
      };
    });
  }

  private isChecked(currentValue: string, value: string) {
    return currentValue === value;
  }

  private async save(selectedValue) {
    if (typeof this.fctToExectute === 'function') {
      await this.fctToExectute.call(this.parent, selectedValue);
    }
  }
}
