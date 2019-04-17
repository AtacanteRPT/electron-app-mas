export class Perfil{
    public nroMatricula:number;
    public paterno:string=" ";
    public materno:string=" ";
    public nombre:string=" ";
    public curso:string=" ";
    public turno:string=" ";
    public img:string="";
    public rol:string=" ";
    public celular:string=" ";
    public id:number;
    public hora_salida:string=" ";
    public hora_llegada:string=" ";
    public identificacion:string=" ";
    public tutores:Perfil[];
    public alumnos:Perfil[];
}
