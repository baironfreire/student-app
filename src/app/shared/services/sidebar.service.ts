import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any;
  constructor() {
    this.menu = [
      {
        title: 'Estudiantes',
        icon: 'bi bi-mortarboard',
        href: '#student',
        id: 'student',
        submenu: [
          {title: 'Lista de Estudiantes', url: '/student-list'},
          {title: 'Registro de Estudiantes', url: '/student-add'},
        ]
      }
    ];
  }
}
