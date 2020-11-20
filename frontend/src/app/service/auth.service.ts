import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registroUrl = 'http://localhost:3000/api/usuario';
  private loginUrl = 'http://localhost:3000/api/auth';
  // Test para obtener datos del usuario
  private datosPerfilUrl = 'http://localhost:3000/api/usuario/perfildatos';

  constructor(private http: HttpClient, private router: Router) { }

  loginEstado = false;

  // Funcion para hacer el test de obtener datos del usuario
  obtenerDatosPerfil() {
    return this.http.get<any>(this.datosPerfilUrl)
  }

  registroUsuario(usuario) {
    return this.http.post<any>(this.registroUrl, usuario);
  }

  loginUsuario(usuario) {
    return this.http.post<any>(this.loginUrl, usuario);
  }

  loginOn() {
    // console.log("Invocación del método loginOn");
    //console.log("Token en localStorage", localStorage.getItem('token'));
    // console.log("Respuesta del token",  !!localStorage.getItem('token'));
    // console.log(typeof localStorage.getItem('token'));
    // return typeof (localStorage.getItem('token') === 'string') ? false : true;
    // this.loginEstado = true;
    // return !!this.loginEstado
    return !!localStorage.getItem('token');
  }

  obtenerToken() {
    return localStorage.getItem('token');
  }
 
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
