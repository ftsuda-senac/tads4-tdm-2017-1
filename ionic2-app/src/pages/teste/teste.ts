import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the Teste page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class Teste {

  constructor(public navCtrl: NavController, 
	public navParams: NavParams,
	public viewCtrl: ViewController,
	public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Teste');
  }
  
  fecharModal() {
	 this.viewCtrl.dismiss();
  }
  
  ionViewWillLeave() {
	let toast = this.toastCtrl.create({
		message: "Modal fechado",
		duration: 5000,
		position: "bottom"
	});
	toast.present();
  }

}
