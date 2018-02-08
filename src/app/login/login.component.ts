import { Component, OnInit } from '@angular/core';
import { Response } from '../class/response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import {Router} from '@angular/router';

import { Usuario } from '../class/usuario';
import { Persona } from '../class/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    Nombre: '',
    Password: '',
    Logeo: false
  };

  mostrarMensaje = false;

  private PostPersona = 'http://localhost/api/personas';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    this.usuario.Logeo = true;
    this.getPersona(this.usuario).subscribe(response => {     
      switch(response.status) {
        case 200: sessionStorage.setItem('currentUser', JSON.stringify({ Id: response.data, token: response.headers.token}));
                  this.router.navigate(['/inicio']);
                  break;
        case 204: this.mostrarError();
                  break;
        case 401: this.mostrarError();
                  break;
        default:  this.router.navigate(['/error']);
                  break;
      }
    });

  }

  /** GET heroes from the server */
  getPersona (usario: Usuario): Observable<Response> {
    const url = this.PostPersona;
    return this.http.post<Response>(url, this.usuario);
  }

  mostrarError() {
    this.mostrarMensaje = true;
  }

}
