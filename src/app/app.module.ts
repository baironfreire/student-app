import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.route';
import { AdminComponent } from './layouts/admin/admin.component';
import { ManageStudentModule } from './modules/manage-student/manage-student.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    SharedModule,
    ManageStudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
