import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto;
  user;
  constructor(private db: DbService, private router: Router) { }
  link = this.db.getCurrentUrl();
  ngOnInit() {
    
    this.db.getProduct(this.link[1], this.link[2], this.link[3]).subscribe(p => {
      console.log(p);
      this.producto = p;
      this.db.userInfo(p['user']).subscribe(u => {
        this.user = u;
        console.log(u);
      });
    });
  }
  mensaje() {
    alert('Mensaje enviado con éxito!');
    this.router.navigateByUrl(`/${this.link[1]}/${this.link[2]}`);
    }
}
