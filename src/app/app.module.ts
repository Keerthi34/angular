import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';


import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { HttpModule } from '@angular/http';
import { CommonModule} from '@angular/common';
import { ClassComponent } from './class/class.component';
import { CookieService } from 'angular2-cookie/core';

import { NewteacherComponent } from './newteacher/newteacher.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StudentDetailsFeePaymentComponent } from './student-details-fee-payment/student-details-fee-payment.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HttpClientModule} from '@angular/common/http';
import { TeacherpasswordComponent } from './teacherpassword/teacherpassword.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminPasswordComponent } from './admin-password/admin-password.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    AddComponent,

    DeleteComponent,
    UpdateComponent,

    ClassComponent,

    NewteacherComponent,

    CreateAccountComponent,

    ChangePasswordComponent,

    StudentDetailsFeePaymentComponent,

    StudentDetailsComponent,

    TeacherpasswordComponent,

    AdminDetailsComponent,

    AdminPasswordComponent

  ],
  imports: [
    BrowserModule,
HttpModule,
CommonModule,
  HttpClientModule,
     FormsModule,
    RouterModule.forRoot([
        {
           path: 'teacher',component: TeacherComponent
        },
        {
          path:'add',component: AddComponent
        },
        {
          path:'delete', component: DeleteComponent
        },
        {
          path:'update', component: UpdateComponent
        },
        {
          path:'class', component: ClassComponent
        },
        {
          path:'newteacher', component:NewteacherComponent
        },
        {
          path:'createaccount', component:CreateAccountComponent
        },
        {
          path:'changepassword/:id', component:ChangePasswordComponent
        },
        {
          path:'teacherpassword/:id', component:TeacherpasswordComponent
        },
        {
          path:'feedetails', component:StudentDetailsFeePaymentComponent
        },

        {
          path:'details/:id', component:StudentDetailsComponent
        },
        {
          path:'admindetails', component:AdminDetailsComponent
        },
        {
          path:'adminpassword/:id', component:AdminPasswordComponent
        }

     ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
