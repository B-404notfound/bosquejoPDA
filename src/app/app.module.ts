import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsuarioComponent } from './models/usuario/usuario.component';
import { LoginComponent } from './models/login/login.component';
import { InformeComponent } from './models/informe/informe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioComponent,
    LoginComponent,
    InformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
