import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/classes/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-exemplo03',
  templateUrl: './exemplo03.component.html',
  styleUrls: ['./exemplo03.component.css']
})
export class Exemplo03Component implements OnInit {

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.listar();
  }

  pessoas: Pessoa[] = [];

  listar() : void {
    this.pessoas = this.pessoaService.listarPessoas();
  }



}
