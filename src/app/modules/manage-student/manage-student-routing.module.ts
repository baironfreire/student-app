import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/layouts/admin/admin.component';
import { StudentDeatilComponent } from './student-details/student-deatil.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'student-list',
        component: StudentListComponent,
      },
      {
        path: 'student-detail/:id',
        component: StudentDeatilComponent
      },
      {
        path: 'student-add',
        component: StudentAddComponent
      },
      {
        path: 'edit',
        component: StudentEditComponent
      },
      {
        path: '',
        redirectTo: '/student-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageStudentRoutingModule { }
