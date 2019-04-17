import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';

@Injectable()
export class AsistenciaService {


  event: string = 'asistencia';
  constructor(
    private socket: Socket
  ) {
    this.event = 'asistencia';
  }

  sendMessage(msg: string) {
    this.socket.emit(this.event, msg);
  }

  getPersonas(): any {
    return this.socket
      .fromEvent<any>(this.event)
      .map(data => {
        return data;
      });
  }


  getPersona() {
    return this.socket
      .fromEvent<any>(this.event)
      .map(data => data.msg);
  }
  close() {
    this.socket.disconnect();
  }
}
