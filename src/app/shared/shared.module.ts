import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from './components/header/header.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { AlertService } from './services/alert.service';
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SlidebarComponent,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [
    SharedService,
    AlertService,
    SidebarService
  ]
})
export class SharedModule { }
