import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HobbiesserviceService {
  private mostrarHobbies = 'http://localhost:3000/api/hobbies';
  private cargarHobbies = 'http://localhost:3000/api/hobbies/datoshobbies';

  constructor(private http: HttpClient) { }
  
  obtenerHobbies() {
    return this.http.get<any>(this.mostrarHobbies); 
  }

  registroHobbies(hobbies) {
    return this.http.post<any>(this.cargarHobbies, hobbies);
  }

  eliminarHobbies(hobbies) {
    const _id = hobbies._id;
    const url = `${this.mostrarHobbies}/${_id}`;
    return this.http.delete<any>(url);
  }
}
