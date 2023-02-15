import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo01',
  templateUrl: './exemplo01.component.html',
  styleUrls: ['./exemplo01.component.css']
})
export class Exemplo01Component {

  ngOnInit(): void {
    //this.pessoas = this.pessoaService.listarPessoas();
    this.gerarNumero();
  }

  // exemplo 01 - Binding Unidirecional (Property Binding: classe -> view)
  //              Binding Unidirecional (Event Binding: view -> classe)
  //                                                    executa-se método na classe
  rnd!: number;

  gerarNumero() : void {
    this.rnd = Math.random();
  }
}
