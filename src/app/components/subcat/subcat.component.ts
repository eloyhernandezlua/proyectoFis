import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {
  productos;
  constructor(private db: DbService) { }

  ngOnInit() {
    const link = this.db.getCurrentUrl();
    this.productos = this.db.getProducts(link[1], link[2]);
  }

}
