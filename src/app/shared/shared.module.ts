import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import '../shared/components/form-control-error/extensions';
import { FormControlErrorComponent } from './components/form-control-error/form-control-error.component';
import { HeaderComponent } from './components/header/header.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { AlertService } from './services/alert.service';
import { HelperService } from './services/helper.service';
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';



@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent,
    NopagefoundComponent,
    FormControlErrorComponent
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
    FormControlErrorComponent,
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
    SidebarService,
    HelperService
  ]
})
export class SharedModule { }
