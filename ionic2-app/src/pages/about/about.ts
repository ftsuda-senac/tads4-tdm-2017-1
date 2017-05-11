import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProdutoService } 
	from '../../providers/produto-service';
import { Produto } from '../../model/produto';

import { Detalhe } from '../detalhe/detalhe';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	
	lista: Produto[];

  constructor(public navCtrl: NavController, 
	public service: ProdutoService) {
		service.listar().then((resultado) => {
			this.lista = resultado;
		});
  }
  
  mostrarDetalhe(event, idProd) {
	this.navCtrl.push(Detalhe, {id: idProd });
  }

  
  
  
  
  
  
  
  
}
