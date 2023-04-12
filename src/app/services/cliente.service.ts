import { Injectable } from '@angular/core';
/*Agregar importaciones*/
import { Cliente } from '../models/cliente';
import { TipoCliente } from '../models/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes:Cliente[] = [];
  private tipo:TipoCliente[] = [];

  constructor() {
    this.clientes = [];
    this.tipo = [
      {
        id:0,
        descripcion: 'Sin definir'
      },
      {
        id:1,
        descripcion: 'Activos'
      },
      {
        id:2,
        descripcion: 'Inactivos'
      },
      {
        id:3,
        descripcion: 'Deudores'
      }
    ];
   }
   //Metodo que retorne el arrglo de clientees
   getClientes(){
    return this.clientes;
   }

   //Metodo que retorne los tipos de clientes
   getTipos(){
    return this.tipo;
   }

   //Metodo que agregue un cliente al arreglo de clientes
   agregarCliente(cliente:Cliente){
    this.clientes.push(cliente);
   }

   //Metodo que inicializa un cliente nuevo
   nuevoCliente():Cliente{
    return {
      id:this.clientes.length +1,
      nombre:'',
      rfc:'',
      domicilio:'',
      tipo:0
    };
   }
}
