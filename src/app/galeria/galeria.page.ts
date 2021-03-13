import { Component, OnInit } from '@angular/core';
import { FotosService } from './fotos.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  fotos: any = [];

  mensaje = '';

  post: any = {
    title: 'Holahgjhgjhgjhgjh',
    url: 'asa',
  };

  indexModify;

  deleteId;

  constructor(
    private fotoService: FotosService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.fotoService.getFotos().subscribe((response) => {
      this.fotos = response;
    });
  }

  agregarElemento(post) {
    this.fotoService.insertFoto({ ...post }).subscribe((response) => {
      this.post = {};
      this.fotoService.getFotos().subscribe((response) => {
        this.fotos = response;
      });
    });
  }

  async actualizarElemento(post) {
    const loading = await this.loadingController.create({
      // cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000,
    });
    await loading.present();

    this.fotoService
      .updateFoto({ ...post })
      .subscribe(async (response) => {
        this.indexModify = undefined;
        // delete this.indexModify;

        this.fotoService.getFotos().subscribe((response) => {
          this.fotos = response;
        });

        await loading.dismiss();
      });
  }

  setModify(i, item) {
    this.indexModify = i;
    // this.post = { ...item };
  }

  async presentAlert(id) {
    this.deleteId = id;

    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Eliminar',
      // subHeader: 'Subtitle',
      message: '¿Esta seguro de eliminar el registro?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            await alert.dismiss();
          },
        },
        {
          text: 'SI',
          handler: async () => {
            this.eliminarElemento();
            await alert.dismiss();
          },
        },
      ],
    });

    await alert.present();
  }

  eliminarElemento() {
    debugger;
    this.fotoService.deleteFoto(this.deleteId).subscribe(
      (response) => {
        debugger;
        this.fotoService.getFotos().subscribe((response) => {
          this.fotos = response;
        });
      },
      (error) => {
        debugger;
        console.log(error);
      }
    );
  }
}
