import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  categorias;

  constructor(private router: Router, private db: DbService) { }

  ngOnInit() {
    const link = this.db.getCurrentUrl();
    this.categorias = this.db.getCategorias(link[1]);
    console.log(this.categorias);

  }

select(route) {
  console.log(route.target.value);
  this.router.navigate([route.target.value]);
}



}
