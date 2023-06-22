import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RolServicesService {

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get('http://localhost:3000/rol');
  }
}
