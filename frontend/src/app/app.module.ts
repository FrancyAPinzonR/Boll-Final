import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { LoginComponent } from './paginas/login/login.component';
import { PerfilUsuarioComponent } from './paginas/perfil-usuario/perfil-usuario.component';
import { HomeComponent } from './paginas/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { ImagenperfilService } from './service/imagenperfil.service';
import { FooterComponent } from './componentes/footer/footer.component';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CartasComponent } from './componentes/cartas/cartas.component';
import { TestimoniosComponent } from './componentes/testimonios/testimonios.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { MarcasComponent } from './paginas/marcas/marcas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NuestrapaginaComponent } from './paginas/nosotros/nuestrapagina/nuestrapagina.component';
import { NuestroequipoComponent } from './paginas/nosotros/nuestroequipo/nuestroequipo.component';
import { NuestrosserviciosComponent } from './paginas/servicios/nuestrosservicios/nuestrosservicios.component';
import { CartasofertaComponent } from './paginas/ofertas/cartasoferta/cartasoferta.component';
import { MarcastopComponent } from './paginas/marcas/marcastop/marcastop.component';
import { FormcontactoComponent } from './paginas/contacto/formcontacto/formcontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    HomeComponent,
    FooterComponent,
    CarruselComponent,
    CartasComponent,
    TestimoniosComponent,
    NosotrosComponent,
    ServiciosComponent,
    OfertasComponent,
    MarcasComponent,
    ContactoComponent,
    NuestrapaginaComponent,
    NuestroequipoComponent,
    NuestrosserviciosComponent,
    CartasofertaComponent,
    MarcastopComponent,
    FormcontactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, ImagenperfilService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
