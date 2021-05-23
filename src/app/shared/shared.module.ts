import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './components';
import { HighlightDirective } from './directives/highlight.directive';
import { HostClickDirective } from './directives/host-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductInfoComponent,
    HighlightDirective,
    HostClickDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ProductInfoComponent,
    HighlightDirective,
    HostClickDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
