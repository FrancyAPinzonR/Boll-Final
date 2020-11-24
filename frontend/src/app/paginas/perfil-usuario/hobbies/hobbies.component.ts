import { Component, OnInit } from '@angular/core';
import { HobbiesserviceService } from '../../../service/perfil-usuario-service/hobbiesservice.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent implements OnInit {
  constructor(private hobbies: HobbiesserviceService) {}

  hobbiesForm = false;
  hobbiesLista = [];

  registrarHobbies = {
    actividadFisica: '',
    actividadRutina: '',
    ocio: '',
  };

  ngOnInit(): void {
    this.hobbies.obtenerHobbies().subscribe(
      (res) => {
        this.hobbiesLista = res;
        if (this.hobbiesLista.length > 0) this.hobbiesForm = true;
        else this.hobbiesForm = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submitDatosHobbies() {
    this.hobbies.registroHobbies(this.registrarHobbies).subscribe(
      (res) => {
        console.log(res);
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarDatosHobbies(hobbiesDatos) {
    this.hobbies.eliminarHobbies(hobbiesDatos).subscribe(
      (res) => {
        // window.location.reload();
        const index = this.hobbiesLista.indexOf(hobbiesDatos);
        if (index > -1) {
          this.hobbiesLista.splice(index, 1);
          this.ngOnInit();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
