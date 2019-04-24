import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {
  productos;
  link;
  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
    this.link = this.db.getCurrentUrl();
    this.productos = this.db.getProducts(this.link[1], this.link[2]);
  }

  changeCampus(event) {
    if (event !== 'campus') {
      this.productos = this.db.getProductsByCampus(this.link[1], this.link[2], event);
    } else {
      this.productos = this.db.getProducts(this.link[1], this.link[2]);
    }
  }

  changePrice(event) {
    if (event.filtro !== 'f') {
      this.productos = this.db.getProductsByPrice(this.link[1], this.link[2], event.filtro, event.price);
    } else {
      this.productos = this.db.getProducts(this.link[1], this.link[2]);
    }
  }

  changeSubCat(event) {
    this.router.navigateByUrl(event)
    .then(() => {
      this.ngOnInit();
    });
    
  }

}
