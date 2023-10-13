import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageStudentRoutingModule } from './manage-student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDeatilComponent } from './student-deatil/student-deatil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDeatilComponent
  ],
  imports: [
    CommonModule,
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
