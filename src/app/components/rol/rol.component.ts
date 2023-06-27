import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCardLgImage } from '@angular/material/card';
import { RolServicesService } from 'src/app/services/rol-services.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolServicesService]
})
export class RolComponent implements OnInit {

  form: FormGroup;

  constructor(private rolServicesService: RolServicesService, private _fb: FormBuilder) {
    this.form = this._fb.group({
      name: ''
    });
  }

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

  onFormSubmit() {
    if(this.form.valid){
      this.rolServicesService.addRol(this.form.value.name).subscribe({
        next: (data) => {
          console.log(data);
          this.getRoles();
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

  deleteRol(id: any) {
    this.rolServicesService.deleteRol(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getRoles();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Complete');
      }
    }
    );
  };
}
