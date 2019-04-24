import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-filtros',
  templateUrl: './menu-filtros.component.html',
  styleUrls: ['./menu-filtros.component.css'] 
})
export class MenuFiltrosComponent implements OnInit {

  info;
  selectedCampus;
  subcategorias;
  categorias;
  @Output() changeCampus: EventEmitter<string> = new EventEmitter();
  @Output() changePrice: EventEmitter<any> = new EventEmitter();
  @Output() changeSubCat: EventEmitter<any> = new EventEmitter();

  price = {
    price: null,
    filtro: 'f'
  };

  producto = {
    subcategoria: 's',
    cat: null
  };
  cat;
  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    this.producto.cat = this.db.getCat();
    this.cat = this.db.getCurrentUrl()[1];
    this.producto.subcategoria = this.db.getCurrentUrl()[2].replace('%20', ' ');
    this.db.getInfo().subscribe(info => {
      this.info = info['campus'];
    });
    this.subcategorias = this.db.getSubcat(this.cat);

  }

  onChange(event) {
    this.changeCampus.emit(event.target.value);
  }

  onPriceChange() {
    this.changePrice.emit(this.price);
  }

  onChangesub(event) {
    this.changeSubCat.emit(`/${this.cat}/${event.target.value}`);
  }

}
