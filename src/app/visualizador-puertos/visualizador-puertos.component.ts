import { Component, OnInit, Input } from '@angular/core';
import { AvanzadoService } from '../avanzado.service';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';
import { element } from 'protractor';

@Component({
  selector: 'app-visualizador-puertos',
  templateUrl: './visualizador-puertos.component.html',
  styleUrls: ['./visualizador-puertos.component.css']
})
export class VisualizadorPuertosComponent implements OnInit {

  puertos:Puerto[]=[];
  
  constructor(private avanzadoService:AvanzadoService) { }

  activarPort(puerto:Puerto){
    if(!puerto.isActive){
      let msg={msg:'abrir',port:puerto.name};
      this.avanzadoService.postAction(JSON.stringify(msg));
    }else{
      alert("El puerto esta activo");
      console.log("el puerto esta activo")
    }

  }
  ngOnInit() {
    console.log("Visualizador de puertos")
    this.getPortActived();
    this.getPuertosConfigurados();
  }
  getPortActived(){
    let msg={msg:'activados'};
    this.avanzadoService.postAction(JSON.stringify(msg));
  }
  getPuertosConfigurados(){
    this.puertos=[];
    this.avanzadoService.getPuertosActivados().subscribe((data:any)=>{
      console.log(data);
      if(data.action==='list'){
        this.puertos=data.portActives;
      }
      if(data.action==='open'){
        this.puertos.forEach(element=>{
          if(element.name==data.name){
            element.isActive=true;
          }
        })
      }
      if(data.action==='close'){
        this.puertos.forEach(element=>{
          if(element.name==data.name){
            element.isActive=false;
          }
        })
      }
      console.log(this.puertos)
    })
  }
  
}

interface Puerto{
  name:string;
  isActive:boolean;
}