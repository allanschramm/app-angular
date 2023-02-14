import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { SubListaPipe } from './pipes/sub-lista.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ConteudoComponent,
    SubListaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
