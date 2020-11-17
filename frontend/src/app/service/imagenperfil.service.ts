import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenperfilService {

  constructor(private http: HttpClient) { }
 
  private mostrarImagen = 'http://localhost:3000/api/imagenperfil'; //establecer metodo get en el back
  private cargarImagen = 'http://localhost:3000/api/imagenperfil/cargarImagen';

  subirImagen(imagenUsuario) {
    return this.http.post<any>(this.cargarImagen, imagenUsuario)
  }

}
