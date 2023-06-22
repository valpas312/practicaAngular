import { Component, OnInit } from '@angular/core';
import { RolServicesService } from 'src/app/services/rol-services.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolServicesService]
})
export class RolComponent implements OnInit {
  constructor(private rolServicesService: RolServicesService) { }

  ngOnInit(): void {
    this.getRoles();
  }


  roles: any = [];

  getRoles() {
    this.rolServicesService.getRoles().subscribe({
      next: (data) => {
        console.log(data);
        this.roles = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Complete');
      }
    }
    );
  }
}
