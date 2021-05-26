import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from './components';
import { HighlightDirective } from './directives/highlight.directive';
import { HostClickDirective } from './directives/host-click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

const customEntities = [
  ProductInfoComponent,
  HighlightDirective,
  HostClickDirective,
  OrderByPipe
];
@NgModule({
  declarations: [
    customEntities
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    customEntities
  ]
})
export class SharedModule { }
