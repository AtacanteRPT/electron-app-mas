import { Component, OnInit ,Input } from '@angular/core';
import { Perfil } from '../perfil-asistencia/perfil';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.component.html',
  styleUrls: ['./perfil-estudiante.component.css']
})
export class PerfilEstudianteComponent implements OnInit {

  @Input() perfil:Perfil=new Perfil();

  constructor() { }

  ngOnInit() {
  }

}
