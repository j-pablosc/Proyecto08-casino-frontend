import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
