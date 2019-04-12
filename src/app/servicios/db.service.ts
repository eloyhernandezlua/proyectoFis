import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private afs: AngularFirestore, private router: Router) { }

  getProduct(cat, subcat, id) {
    return this.afs.doc(`categorias/${cat}/subcat/${subcat}/productos/${id}`).snapshotChanges().pipe(
      map(document => {
        return document.payload.data();
      })
    );
  }

  getProducts(cat, subcat) {
    return this.afs.collection(`categorias/${cat}/subcat/${subcat}/productos`).snapshotChanges().pipe(
      map(change => change.map(document => {
        const result = document.payload.doc.data();
        result.id = document.payload.doc.id;
        return result;
      }))
    );

  }

  getCategorias(cat) {
    return this.afs.collection(`categorias/${cat}`).snapshotChanges().pipe(
      map(change => change.map(document => {
        const result = document.payload.doc.data();
        result.id = document.payload.doc.id;
        return result;
      }))
    );

  }

  getCurrentUrl() {

  return this.router.url.split('/');

  }
}


