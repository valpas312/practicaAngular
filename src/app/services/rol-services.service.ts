import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RolServicesService {

  private url = 'http://localhost:3000/rol';

  constructor(private http: HttpClient) { }

  getRoles() {
    return this.http.get(this.url);
  }

  addRol(name: any): Observable<any> {
    return this.http.post(this.url, { name: name });
  }

  deleteRol(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  };
}
