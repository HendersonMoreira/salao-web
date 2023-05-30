import { Component } from '@angular/core';
import { Produto } from '../model/produtos';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private alertController: AlertController,
  ) { }

  produtos = new Produto();
  produto = new Produto();

  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Important message',
      message: texto,
      buttons: ['enviado'],
    });
    await alert.present();
  }

  save() {
    console.log(this.produto);
    this.presentAlert("Aviso", "Cadastrado");
  }


}
