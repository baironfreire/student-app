import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/layouts/admin/admin.component';
import { StudentDeatilComponent } from './student-deatil/student-deatil.component';
import { StudentListComponent } from './student-list/student-list.component';

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
