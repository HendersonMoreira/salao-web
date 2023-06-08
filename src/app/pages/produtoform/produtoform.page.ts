import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';


@Component({
  selector: 'app-produtoform',
  templateUrl: './produtoform.page.html',
  styleUrls: ['./produtoform.page.scss'],
})
export class ProdutoformPage implements OnInit {
save() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit() {
  }
produto = new Produto ()
}
