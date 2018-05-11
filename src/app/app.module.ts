import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { HttpModule } from '@angular/http';

import { ClassComponent } from './class/class.component';

//import {FormsModule} from @angular/forms;

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    AddComponent,

    DeleteComponent,
    UpdateComponent,

    ClassComponent
  ],
  imports: [
    BrowserModule,
HttpModule,
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


     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
