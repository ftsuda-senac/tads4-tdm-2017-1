import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Teste } from '../teste/teste';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
	public modalCtrl: ModalController) {

  }
  
  abrirModal() {
	  let modal = this.modalCtrl.create(Teste);
	  modal.present();
  }

}
