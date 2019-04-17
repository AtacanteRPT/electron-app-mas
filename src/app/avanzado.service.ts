import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';

@Injectable()
export class AvanzadoService {
  base: string = "http://127.0.0.1:1338";
  event: string = 'handlePorts';
  constructor(
    private http: HttpClient,
    private socket: Socket
  ) { }

  getUrlServe() {
    return this.http.get(this.base + '/server')
  }
  postUrlServe(serverPath) {
    let body = { pathserver: serverPath };
    return this.http.post(this.base + '/server', body);
  }
  postUrlServeImg(serverPath) {
    let body = { pathserver: serverPath };
    return this.http.post(this.base + '/serverImg', body);
  }
  postGuardarEvento(body) {
    console.log('POST GUARDAR EVENTO:',body)
    // let body = { pathserver: serverPath };
    // return this.http.post(this.base + '/serverImg', body);
        return this.http.post(this.base + '/guardarEvento', body);

  }
 getEventos() {
    return this.http.get(this.base + '/evento');
    // return this.http.get('http://militantesmasipsp.com:9090' + '/evento');
  }

  getPuertos() {
    return this.http.get(this.base + '/puertos');
  }
  getPuertosSeleccionados() {
    return this.http.get(this.base + '/seleccionados');
  }
  deletePuertoSeleccionado(puerto: string) {
    return this.http.delete(this.base + '/seleccionados/' + puerto);
  }
  postPort(body) {
    return this.http.post(this.base + '/puertos', body);
  }

  postAction(msg: string) {
    this.socket.emit(this.event, msg);
  }
  getPuertosActivados(): any {
    return this.socket
      .fromEvent<any>(this.event)
      .map(data => {
        return data;
      });
  }

  close() {
    this.socket.disconnect();
  }

}
