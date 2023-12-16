import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckmarkComponent } from './checkmark/checkmark.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';

@NgModule({
  declarations: [
    CheckmarkComponent,
    SelectFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckmarkComponent,
    SelectFilterComponent
  ]
})
export class SharedModule { }
