import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearTareaService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  crearTarea(tareaData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tareas/create`, tareaData);
  }
}