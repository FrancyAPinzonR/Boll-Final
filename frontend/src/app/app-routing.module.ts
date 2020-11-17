import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from  './paginas/home/home.component'
import { LoginComponent } from './paginas/login/login.component';
import { PerfilUsuarioComponent } from './paginas/perfil-usuario/perfil-usuario.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { MarcasComponent } from './paginas/marcas/marcas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'perfilusuario',
    component: PerfilUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
  },
  {
    path: 'ofertas',
    component: OfertasComponent,
  },
  {
    path: 'marcas',
    component: MarcasComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
