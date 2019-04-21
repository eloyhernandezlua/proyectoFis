import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: null,
    pwd: null
  };

  constructor(private db: DbService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const {email, pwd} = this.usuario;
    if (email && pwd ) {

      this.db.login(email, pwd)
      .then(() => {
        alert('Sesión iniciada con éxito');
        this.router.navigateByUrl('/');
      })
      .catch(() => {
        alert('Error');
      });
    } else {
      alert("Faltan campos por llenar");
    }
  }
}
