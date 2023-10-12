import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDeatilComponent } from './student-deatil/student-deatil.component';

const routes: Routes = [
  {
    path: '/students',
    redirectTo: '/students/student-list',
    children: [
      {
        path: '/student-list',
        component: StudentListComponent,
      },
      {
        path: 'student-detail',
        component: StudentDeatilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageStudentRoutingModule { }
