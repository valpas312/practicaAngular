import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.rutaActiva.queryParams.subscribe(data => {
      console.log(data);
    } );
  }
}
