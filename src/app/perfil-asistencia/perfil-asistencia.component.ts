import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsistenciaService } from '../asistencia.service';
import { QRCodeComponent } from 'angular2-qrcode';
import { Perfil } from './perfil';
import { ObservadorFondoService } from '../observador-fondo.service';


@Component({
  selector: 'app-perfil-asistencia',
  templateUrl: './perfil-asistencia.component.html',
  styleUrls: ['./perfil-asistencia.component.css']
})
export class PerfilAsistenciaComponent implements OnInit, OnDestroy {

  tipoInstitucion = "MOVIMIENTO AL SOCIALIMO";
  nombreSecundario = "REUNIÓN";
  nombrePrimario = "MAS - IPSP";
  perfil: Perfil = new Perfil();
  fnc: any;
  titulo: boolean = true;
  contadorProtector: number = 30;
  intervalclock;


  constructor(
    private serve: AsistenciaService,
    private observadorFondoService: ObservadorFondoService
  ) {
    console.log("Sucribiendose al sockets")
    this.getPerfil();
    this.getNombreEvento();
    // this.iniciarContadorrotector(this.contadorProtector,this.observadorFondoService);
  }
  // this.observador.getFoto().subscribe((data:any)=>{
  //     this.img=data.fondo;
  //   })

  getNombreEvento() {
    this.observadorFondoService.getEvento().subscribe((data: any) => {
      this.nombreSecundario = data.nombreEvento;
    });
  }

  getPerfil() {
    // console.log("Sucribiendose al sockets")
    this.serve.getPersonas().subscribe(data => {
      // console.log("conectado al sockets")
      // this.resetearContador();
      this.observadorFondoService.cambiarEstadoProtector(false);


      this.perfil.identificacion = data.identificacion;
      this.perfil.paterno = data.paterno;
      this.perfil.materno = data.materno;
      this.perfil.nombre = data.nombre;
      this.perfil.curso = 'MAS';
      this.perfil.turno = 'IPSP';
      this.perfil.img = data.img;
      this.perfil.hora_salida = '12:00pm';
      this.perfil.hora_llegada = data.hora_llegada;
      this.perfil.rol = 'alumno';


      if (data.rol === "tutor") {
        this.perfil.alumnos = data.alumnos;
      } else {
        if (data.rol === "alumno") {
          this.perfil.tutores = data.tutores;
        }
      }
      // console.log(data);
    }, err => {
      console.error(err)
    })
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }

  resetearContador() {
    this.contadorProtector = 30;
    if (this.intervalclock !== null) {
      clearInterval(this.intervalclock);
      this.iniciarContadorrotector(this.contadorProtector, this.observadorFondoService);
    }
  }

  iniciarContadorrotector(contador, observador) {
    console.log("contador iniciado")
    this.intervalclock = setInterval(function () {
      console.log(contador)
      if (contador > 0) {
        contador--;
      } else {
        if (contador === 0) {
          observador.cambiarEstadoProtector(true);
        }
      }
    }, 1000)
  }

}
