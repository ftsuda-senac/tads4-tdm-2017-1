import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdutoService } 
	from '../../providers/produto-service';
import { Produto } from '../../model/produto';


/**
 * Generated class for the Detalhe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class Detalhe {
	
	id: number;
	produto: Produto;

  constructor(public navCtrl: NavController,
	public navParams: NavParams,
	public service: ProdutoService) {
		
  }
  
  ionViewWillEnter() {
	 this.id = +this.navParams.get("id"); // O + converte string para numero
	 this.service.obter(this.id).then((prod) => {
		 this.produto = prod;
	 });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detalhe');
  }
  
  voltar() {
	  this.navCtrl.pop();
  }

}
