import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuFiltrosComponent } from './components/menu-filtros/menu-filtros.component';
import { InfoProductoComponent } from './components/info-producto/info-producto.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SubcatComponent } from './components/subcat/subcat.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriasComponent,
    ProductoComponent,
    ProductosComponent,
    MenuFiltrosComponent,
    InfoProductoComponent,
    MensajesComponent,
    LoginComponent,
    PrincipalComponent,
    SubcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
