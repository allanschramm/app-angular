import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/classes/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit{
  
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.gerarNumero();
    //this.pessoas = this.pessoaService.listarPessoas();
    this.listar();
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

  listar() : void {
    this.pessoas = this.pessoaService.listarPessoas();
  }

  nomePessoa!: string;

  mostrar(nome: string) : void {
    this.nomePessoa = nome;
  }

  // exemplo 03
  filtrar(input: string) : void {
    this.listar();
    this.pessoas = this.pessoas.filter(p => 
      p.nome.toLowerCase().includes(input.toLowerCase()));
  }

}
