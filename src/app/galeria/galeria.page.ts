import { Component, OnInit } from '@angular/core';
import { FotosService } from './fotos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  fotos: any = [];

  mensaje = '';

  post = {
    title: 'Hola',
    url: 'asa',
  };

  constructor(private fotoService: FotosService) {}

  ngOnInit() {
    this.fotoService.getFotos().subscribe((response) => {
      this.fotos = response;
    });
  }

  agregarElemento() {
    this.fotos.push({ ...this.post });
    this.post = {
      title: '',
      url: '',
    };
  }
}
