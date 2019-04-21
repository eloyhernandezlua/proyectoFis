import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private afs: AngularFirestore, private router: Router, private auth: AngularFireAuth) { }

  getProduct(cat, subcat, id) {
    return this.afs.doc(`categorias/${cat}/subcat/${subcat}/productos/${id}`).snapshotChanges().pipe(
      map(document => {
        console.log(document.payload.data());
        return document.payload.data();
      })
    );
  }

  getProducts(cat, subcat) {
    return this.afs.collection(`categorias/${cat}/subcat/${subcat}/productos`).snapshotChanges().pipe(
      map(change => change.map(document => {
        const result = document.payload.doc.data() as any;
        result.id = document.payload.doc.id;
        return result;
      }))
    );
  }

  getProductsByCampus(cat, subcat, campus) {
    return this.afs.collection(`categorias/${cat}/subcat/${subcat}/productos`, ref => ref.where('producto.campus', '==', campus))
    .snapshotChanges().pipe(
      map(change => change.map(document => {
        const result = document.payload.doc.data() as any;
        result.id = document.payload.doc.id;
        return result;
      }))
    );
  }

  getProductsByPrice(cat, subcat, filtro, price) {
    let qFiltro;
    switch (filtro) {
      case 'menor':
        qFiltro = '<=';
        break;
      case 'mayor':
        qFiltro = '>=';
        break;
      case 'igual':
        qFiltro = '==';
        break;
    }
    return this.afs.collection(`categorias/${cat}/subcat/${subcat}/productos`, ref => ref.where('producto.precio', qFiltro, price))
    .snapshotChanges().pipe(
      map(change => change.map(document => {
        const result = document.payload.doc.data() as any;
        result.id = document.payload.doc.id;
        return result;
      }))
    );
  }

  getCategorias(cat) {
    return this.afs.collection(`categorias/${cat}`).snapshotChanges().pipe(
      map(change => change.map(document => {
        const result = document.payload.doc.data() as any;
        result.id = document.payload.doc.id;
        return result;
      }))
    );

  }

  getSubcat(cat) {
    return this.afs.collection(`categorias/${cat}/subcat`).snapshotChanges().pipe(
      map(change => change.map(document => {
        const result = document.payload.doc.data() as any;
        result.id = document.payload.doc.id;
        return result;


      }))


    );

  }

  getCat() {
    return this.afs.collection(`categorias`).snapshotChanges().pipe(
      map(change => change.map(document => {
        const result = document.payload.doc.data() as any;
        result.id = document.payload.doc.id;
        return result;


      }))


    );

  }

  getCurrentUrl() {

  return this.router.url.split('/');

  }


signUp(usuario) {
  return this.auth.auth.createUserAndRetrieveDataWithEmailAndPassword(usuario.email, usuario.pwd)
    .then(user => {
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        telefono: usuario.telefono
      };
      this.afs.doc(`users/${user.user.uid}`).set(data);
    });
}

login(email, pwd) {
  return this.auth.auth.signInWithEmailAndPassword(email, pwd);
}

publish(producto) {
  const user = this.auth.auth.currentUser.uid;
  const data = {
    producto,
    user
  };
  console.log(producto, data);
  return this.afs.collection(`categorias/${producto.cat}/subcat/${producto.subcat}/productos`).add(data);
}

userInfo(id) {
  return this.afs.doc(`users/${id}`).valueChanges();
}
addSubCat(cat, subcat) {
  this.afs.doc(`categorias/${cat}/subcat/${subcat}`).set({});
}

addInfo(info) {
  return this.afs.doc('ajustes/info').update(info)
  .catch(() => {
    this.afs.doc('ajustes/info').set(info);
  });
}

getInfo() {
  return this.afs.doc('ajustes/info').valueChanges();
}

}


