import { Component } from '@angular/core';
import { CrearTareaService } from '../crear-tarea.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {
  tarea: any = {};

  constructor(private crearTareaService: CrearTareaService) {}

  crearTarea() {
    this.crearTareaService.crearTarea(this.tarea).subscribe(
      (response) => {
        // Manejar la respuesta de la API después de crear la tarea
        console.log('Tarea creada:', response);
      },
      (error) => {
        // Manejar el error en caso de que falle la creación de la tarea
        console.error('Error al crear la tarea:', error);
      }
    );
  }
}