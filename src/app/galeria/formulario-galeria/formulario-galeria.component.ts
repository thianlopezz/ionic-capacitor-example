import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-galeria',
  templateUrl: './formulario-galeria.component.html',
  styleUrls: ['./formulario-galeria.component.scss'],
})
export class FormularioGaleriaComponent implements OnInit {
  // post = {
  //   title: 'Hola',
  //   url: 'asa',
  // };

  @Input() post;
  @Input() post2;

  @Output('save') _save = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  save() {
    this._save.next(this.post);
  }
}
