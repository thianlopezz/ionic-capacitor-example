import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaPageRoutingModule } from './galeria-routing.module';

import { GaleriaPage } from './galeria.page';
import { FormularioGaleriaComponent } from './formulario-galeria/formulario-galeria.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaPageRoutingModule
  ],
  // entryComponents: [FormularioGaleriaComponent],
  declarations: [GaleriaPage, FormularioGaleriaComponent]
})
export class GaleriaPageModule {}
