import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config!: ConfigModel;
  constructor() { }

  getConfig(): ConfigModel {
    return this.config ?? {};
  }

  setConfig(config: Partial<ConfigModel>): void {
    const { id, login, email } = {...config};
    if (id) {
      this.config.id = id;
    }
    if (login) {
      this.config.login = login;
    }
    if (email) {
      this.config.email = email;
    }
  }
}
