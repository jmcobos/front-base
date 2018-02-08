import { Component, OnInit } from '@angular/core';
import { Persona } from '../class/persona';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  persona: Persona = {
    Id: 0,
    Nombre: 'Javier',
    Apellido_01: 'Marin',
    Apellido_02: 'Cobos',
    Password: ''
  }

  selectedPersona: Persona;
  
  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }

  constructor() { }

  ngOnInit() {
  }

}
