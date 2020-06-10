import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { VisorComponent } from './components/visor/visor.component';
import { BotonAddComponent } from './components/boton-add/boton-add.component';
import { BotonDelComponent } from './components/boton-del/boton-del.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    VisorComponent,
    BotonAddComponent,
    BotonDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
