import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './components';
import { HighlightDirective } from './directives/highlight.directive';
import { HostClickDirective } from './directives/host-click.directive';

@NgModule({
  declarations: [
    ProductInfoComponent,
    HighlightDirective,
    HostClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductInfoComponent, HighlightDirective, HostClickDirective]
})
export class SharedModule { }
