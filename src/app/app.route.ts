import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./layouts/admin/admin.component";
import { StudentListComponent } from "./modules/manage-student/student-list/student-list.component";
import { StudentDeatilComponent } from "./modules/manage-student/student-deatil/student-deatil.component";


const appRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: '/student-list',
                pathMatch: 'full'
            },
            {
                path: 'student-list',
                component: StudentListComponent
            },
            {
                path: 'student-detail',
                component: StudentDeatilComponent
            }
        ]
    },
    {
        path: '**', 
        component: StudentListComponent
    }
];

export const APP_ROUTES  = RouterModule.forRoot(appRoutes, {useHash: true});

