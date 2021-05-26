import { Injectable, InjectionToken } from '@angular/core';

export interface LocalStorageModel {
  setItem: (key: string, val: any) => void;
  getItem: (key: string) => any;
  removeItem: (key: string) => void;
}

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, val: any): void {
    window.localStorage.setItem(key, JSON.stringify(val));
  }

  getItem(key: string): any {
    return JSON.parse(window.localStorage.getItem(key) ?? '');
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}

export const localStorageInstance = new LocalStorageService();

export const generatedLocalStorage = new InjectionToken<LocalStorageModel>('generated local storage');
