import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto;
  user;
  constructor(private db: DbService) { }

  ngOnInit() {
    const link = this.db.getCurrentUrl();
    this.db.getProduct(link[1], link[2], link[3]).subscribe(p => {
      console.log(p);
      this.producto = p;
      this.db.userInfo(p['user']).subscribe(u => {
        this.user = u;
        console.log(u);
      });
    });
  }

}
