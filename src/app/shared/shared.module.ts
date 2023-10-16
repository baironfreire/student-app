import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { AlertService } from './services/alert.service';
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    HeaderComponent,
    SlidebarComponent,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule 
  ],
  providers: [
    SharedService,
    AlertService,
    SidebarService
  ]
})
export class SharedModule { }
