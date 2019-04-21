import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input() categoria;
  categorias ;
  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    this.categorias = this.db.getSubcat(this.categoria.id);

  }
  onChange(event) {
    this.router.navigateByUrl(`${this.categoria.id}/${event.target.value}`);
  }
  

}
 