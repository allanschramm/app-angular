import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { SubListaPipe } from './pipes/sub-lista.pipe';
import { FortyplusPipe } from './pipes/fortyplus.pipe';
import { NamesizePipe } from './pipes/namesize.pipe';
import { Exemplo01Component } from './components/exemplo01/exemplo01.component';
import { Exemplo02Component } from './components/exemplo02/exemplo02.component';
import { Exemplo03Component } from './components/exemplo03/exemplo03.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ConteudoComponent,
    SubListaPipe,
    FortyplusPipe,
    NamesizePipe,
    Exemplo01Component,
    Exemplo02Component,
    Exemplo03Component,
    MenuComponent,
    PrincipalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
