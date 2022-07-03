import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    SearchFormComponent
  ]
})
export class SharedModule { }
