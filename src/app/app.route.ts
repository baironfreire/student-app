import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./layouts/admin/admin.component";
import { StudentListComponent } from "./modules/manage-student/student-list/student-list.component";


const appRoutes: Routes = [
    {
        path: '**', 
        component: StudentListComponent
    }
];

export const APP_ROUTES  = RouterModule.forRoot(appRoutes, {useHash: true});

