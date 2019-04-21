import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private db: DbService) { }

  ngOnInit() {
  }

  addCampus() {
    const campi = prompt('Ingresa campus y separa por comas');
    const campusArr = campi.split(',');
    const data = {
      campus: campusArr
    };
    this.db.addInfo(data);
  }

}
