import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    SlidebarComponent
  ]
})
export class SharedModule { }
