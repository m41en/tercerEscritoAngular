import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenuItems() {
    return [
      { label: 'Crear Tarea', link: '/crear-tarea' },
      { label: 'Listar Tareas', link: '/listar-tareas' }
    ];
  }
}