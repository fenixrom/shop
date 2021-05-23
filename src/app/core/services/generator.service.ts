import { Injectable } from '@angular/core';
import { genId } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private valueGenerator: Generator<number, number, number>;
  constructor() {
    this.valueGenerator = genId();
  }

  generate(n: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for ( let i = 0; i < n; i++ )
        {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

    return text;
  }

  getNewId(): number {
    return this.valueGenerator.next().value;
  }
}
