import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
//import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'crear-tarea', component: CrearTareaComponent },
  //{ path: 'listar-tareas', component: ListarTareasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }