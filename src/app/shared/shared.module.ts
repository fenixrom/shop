import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './components';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    ProductInfoComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductInfoComponent, HighlightDirective]
})
export class SharedModule { }
