import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppConstantsModule } from './../../app.constants';

@NgModule({
  imports: [
    CommonModule,
    AppConstantsModule
  ],
  exports:[
   AppConstantsModule
  ],
  declarations: [],
  providers:[]
})
export class SharedModule { }
