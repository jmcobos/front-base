import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  usuario = this.currentUser['Id']['Nombre'] + ' ' + this.currentUser['Id']['Apellido_01'];
  mostrarUser = true;
  //this.mostrarUser = true;
  ngOnInit() {

  }
}