import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  name: string = 'Sin params';
  surname: string = 'Sin params';

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.rutaActiva.queryParams.subscribe(data => {
      this.name = data['name'];
    } );

    this.rutaActiva.params.subscribe(data => {
      this.surname = data['surname'];
    });
  }
}
