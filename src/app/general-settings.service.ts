import { Injectable } from '@angular/core';

export enum ListFormat {
  Grid,
  Table
}

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingsService {

  private _currentListFormat: ListFormat = ListFormat.Table;

  constructor() { }

  public get listFormat(): ListFormat {
    return this._currentListFormat;
  }

  public set listFormat(value: ListFormat) {
    this._currentListFormat = value;
  }
}
