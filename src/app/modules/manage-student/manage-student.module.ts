import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageStudentRoutingModule } from './manage-student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDeatilComponent } from './student-details/student-deatil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDeatilComponent,
    StudentAddComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManageStudentRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    StudentListComponent,
    StudentDeatilComponent
  ]
})
export class ManageStudentModule { }
