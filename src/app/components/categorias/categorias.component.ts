import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input() categoria;
  constructor() { }

  ngOnInit() {
  }

}
