import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilAsistenciaComponent } from './perfil-asistencia/perfil-asistencia.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';

const routes: Routes = [
  {path:"",component:PerfilAsistenciaComponent},
  {path:"configuraciones",component:ConfiguracionesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
