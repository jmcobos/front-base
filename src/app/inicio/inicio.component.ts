import { Component, OnInit } from '@angular/core';
import { Usuario } from '../class/usuario';
import { Persona } from '../class/persona';
import { Response } from '../class/response';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private personasUrl = 'http://localhost/api/personas';
  private GetPersonaByName = 'http://localhost/api/personas/:nombre';
  private PostPersona = 'http://localhost/api/personas';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

}
