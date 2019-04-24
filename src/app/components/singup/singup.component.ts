import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {


  usuario = {
    nombre: null,
    telefono: null,
    email: null,
    pwd: null,
    pwd2: null
  };
  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    const {nombre, telefono, email, pwd, pwd2} = this.usuario;
    const tec = email.split('@')[1];
    if (nombre && telefono && email && pwd && pwd === pwd2 && (tec === 'itesm.mx' || tec === 'tec.mx')) {
      this.db.signUp(this.usuario)
      .then(() => {
        alert('Usuario registrado con éxito');
        this.router.navigateByUrl('/');
      });
    } else if (pwd !== pwd2) {
      alert('La contraseña no coincide');
    } else if (tec !== 'itesm.mx' || tec !== 'tec.mx') {
      alert ('Favor de ingeresar tu correo institucional \n @itesm.mx o @tec.mx');
    } else {
      alert('Faltan campos por llenar');
    }
  }

}
