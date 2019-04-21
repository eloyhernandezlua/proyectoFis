import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-menu-filtros',
  templateUrl: './menu-filtros.component.html',
  styleUrls: ['./menu-filtros.component.css']
})
export class MenuFiltrosComponent implements OnInit {

  info;
  selectedCampus;
  @Output() changeCampus: EventEmitter<string> = new EventEmitter();
  @Output() changePrice: EventEmitter<any> = new EventEmitter();
  price = {
    price: null,
    filtro: 'f'
  };
  constructor(private db: DbService) { }

  ngOnInit() {
    this.db.getInfo().subscribe(info => {
      this.info = info['campus'];
    });
  }

  onChange(event) {
    this.changeCampus.emit(event.target.value);
  }

  onPriceChange() {
    this.changePrice.emit(this.price);
  }

}
