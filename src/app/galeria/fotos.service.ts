import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  constructor(private http: HttpClient) {}

  getFotos() {
    return this.http.get('http://localhost:8000/fotos');

    // codigo
  }
}
