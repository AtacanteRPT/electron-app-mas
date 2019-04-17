import { Component ,OnInit } from '@angular/core';
import {ObservadorFondoService} from "./observador-fondo.service"

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  imgBackground="assets/img/fondof.jpg";
  subscription:Subscription;
  subscriptionProtector:Subscription;

  swProtector=true;

  constructor(private observador:ObservadorFondoService){
  	this.subscription=this.observador.observableFondo.subscribe(fondo=>{
      this.imgBackground=fondo+'?nocache='+parseInt(Math.random()*100+"");
  	});
    
    this.subscriptionProtector=this.observador.observableFondoProtector.subscribe(estado=>{
      console.log(estado)
      this.swProtector=estado;
    })
  }

  ngOnInit(){

    this.imgBackground="assets/img/fondof.jpg";
    if(("fondo" in localStorage)){
      this.imgBackground=localStorage.getItem("fondo");
    }else{
      this.imgBackground="assets/img/fondof.jpg";
    }
  }

}
