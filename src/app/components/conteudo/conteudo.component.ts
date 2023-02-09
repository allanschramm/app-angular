import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/classes/pessoa';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit{
  
  ngOnInit(): void {
    this.gerarNumero();
    this.listarPessoas();
  }

  // exemplo 01 - Binding Unidirecional (Property Binding: classe -> view)
  //              Binding Unidirecional (Event Binding: view -> classe)
  //                                                    executa-se método na classe
  rnd!: number;

  gerarNumero() : void {
    this.rnd = Math.random();
  }

  // exemplo 02 - produzindo uma lista de pessoas
  pessoas: Pessoa[] = [];

  listarPessoas() : void {
    this.pessoas = [
      { nome: 'Pedro', idade: 32 },
      { nome: 'Ana Paula', idade: 25 },
      { nome: 'Daniela', idade: 33 },
      { nome: 'Maria', idade: 40 },
      { nome: 'Osvaldo', idade: 45 }
    ];
  }

  nomePessoa!: string;
  mostrar(nome: string) : void {
    this.nomePessoa = nome;
  }

}
