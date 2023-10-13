import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from './components/header/header.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    HeaderComponent,
    SlidebarComponent,
    DataTablesModule
  ]
})
export class SharedModule { }
