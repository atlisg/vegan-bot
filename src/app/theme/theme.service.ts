import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ThemeService {
  private isDarkSource: BehaviorSubject<boolean>;
  public isDark: any;

  constructor() {
    this.isDarkSource = new BehaviorSubject(true);
    this.isDark = this.isDarkSource.asObservable();
  }

  public themeChanged(value: boolean) {
    this.isDarkSource.next(value);
  }
}
