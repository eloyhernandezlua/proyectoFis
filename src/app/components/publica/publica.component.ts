import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publica',
  templateUrl: './publica.component.html',
  styleUrls: ['./publica.component.css']
})
export class PublicaComponent implements OnInit {
  producto = {
    imagen: null,
    nombre: null,
    descripcion: null,
    precio: null,
    cat: null,
    subcat: null
  } ;
categorias;
subcategorias;

  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {

    this.categorias = this.db.getCat();

  }

  onSubmit() {
    const {imagen, nombre, descripcion, precio, cat, subcat} = this.producto;
    if (imagen && nombre && descripcion && precio && cat && subcat) {
      this.db.publish(this.producto)
        .then(() => {
          alert('Producto publicado con éxito');
          this.router.navigateByUrl('/');
        })
        .catch(() => {
          alert('Erorr');
        });
    } else {
      alert("Faltan campos por llenar");
    }
  }

  onCatChange() {
    if (this.producto.cat) {
      this.subcategorias = this.db.getSubcat(this.producto.cat);
    }
  }

}
