import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFilterComponent } from './select-filter/select-filter.component';
import { CheckmarkComponent } from './checkmark/checkmark.component';



@NgModule({
  declarations: [
    SelectFilterComponent,
    CheckmarkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectFilterComponent,
    CheckmarkComponent
  ]
})
export class SharedModule { }
