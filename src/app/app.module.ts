import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
// servicios usuario
import { UsuarioService } from './servicios/usuario/usuario.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//Rutas

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent }from './shared/header/header.component';
import { RegistroComponent } from './login/registro.component';
import { ErrorComponent } from './shared/error/error.component';
import { PagesComponent } from './pages/pages.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    RegistroComponent,
    ErrorComponent,
    PagesComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
