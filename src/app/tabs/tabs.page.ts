import { Component } from '@angular/core';

const INICIO = "INICIO";
const OPCION_1 = "OPCIÓN_1";
const OPCION_2 = "OPCIÓN_2";
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  SELECCION = INICIO;

  constructor() {

  }

  seleccionarInicio(){
    this.SELECCION = INICIO;
  }
  seleccionarOpcion1(){
    this.SELECCION = OPCION_1;
  }
  seleccionarOpcion2(){
    this.SELECCION = OPCION_2;
  }

  inicio(): string{
    return INICIO;
  }

  opcion1(): string{
    return OPCION_1;
  }

  opcion2(): string{
    return OPCION_2;
  }


}
