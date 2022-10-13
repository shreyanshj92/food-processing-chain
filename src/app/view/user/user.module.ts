import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
  

  CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
