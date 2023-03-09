import { Component } from '@angular/core';
import {TurismoService} from "../turismo.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  clientes: any;
  NombreCliente: any;
  Telefono: any;
  Direccion: any;

  constructor(private crudTurismo:TurismoService) {}
  ngOnInit(){

    this.crudTurismo.readCliente().subscribe(data=>{
      this.clientes=data.map(e=>{
        return{
          id: e.payload.doc.id,
          isEdit: false,
          // @ts-ignore
          NomClient: e.payload.doc.data()[this.NombreCliente],
          // @ts-ignore
          Tel: e.payload.doc.data()[this.Telefono],
          // @ts-ignore
          Dir: e.payload.doc.data()[this.Direccion]
        }
      })
    })
  }

  createRecord() {
    let record = {};

      // @ts-ignore
      record['NomClient']=this.NomClient;
      // @ts-ignore
      record['Tel']=this.Tel;
      // @ts-ignore
      record['Dir']=this.Dir;

      this.crudTurismo.createCliente(record).then(resp=>{
        this.NombreCliente="";
        this.Telefono="";
        this.Direccion="";
        console.log(resp);
        })
        .catch(error=>{
          console.log(error);
          });
  }
}
