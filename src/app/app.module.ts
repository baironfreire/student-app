import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SlidebarComponent } from './shared/components/slidebar/slidebar.component';
import { AdminComponent } from './layouts/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
