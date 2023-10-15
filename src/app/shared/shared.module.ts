import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from './components/header/header.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';



@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent
  ],
  imports: [
    CommonModule,
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
    SharedService
  ]
})
export class SharedModule { }
