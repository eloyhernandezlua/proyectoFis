import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-info-producto',
  templateUrl: './info-producto.component.html',
  styleUrls: ['./info-producto.component.css']
})
export class InfoProductoComponent implements OnInit {

  constructor(private db: DbService) { }

  ngOnInit() {

    this.db.getCurrentUrl();
  }

}
