import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from './components/header/header.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [
    HeaderComponent,
    SlidebarComponent,
    DataTablesModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
