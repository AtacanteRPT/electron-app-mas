import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ObservadorFondoService {

  fondo: string;
  swProtector: boolean;
  private _bhFondo = new BehaviorSubject<any>(this.fondo);
  observableFondo = this._bhFondo.asObservable();

  private _bhFondoProtector = new BehaviorSubject<any>(this.swProtector);
  observableFondoProtector = this._bhFondoProtector.asObservable();

  base: string = "http://127.0.0.1:1338";

  constructor(private http: HttpClient) {

  }

  cambiarEstado(nFondo: string) {
    this.fondo = nFondo;
    this._bhFondo.next(this.fondo);
  }
  cambiarEstadoProtector(estado: boolean) {
    this._bhFondoProtector.next(estado);
  }
  getEvento() {
    // return {nombreEvento:'OSO EVENTO'};
    // return this.http.get('http://militantesmasipsp.com:9090' + '/evento/1');
    return this.http.get(this.base + '/eventoActual');

  }

  getFoto() {
    return this.http.get(this.base + '/fondo');
  }

  postFoto(body) {
    let Headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.http.post(this.base + '/upload', body);
  }



}
