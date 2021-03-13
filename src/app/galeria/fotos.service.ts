import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  constructor(private http: HttpClient) {}

  getFotos() {
    return this.http.get('http://localhost:8000/fotos');
  }

  insertFoto(params) {
    return this.http.post('http://localhost:8000/fotos', params);
  }

  updateFoto(params) {
    return this.http.put('http://localhost:8000/fotos', params);
  }

  deleteFoto(id) {
    return this.http.delete('http://localhost:8000/fotos/' + id);
  }
}
