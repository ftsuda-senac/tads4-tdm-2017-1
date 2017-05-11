import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Produto } from '../model/produto';
import { PRODUTOS } from './produto-mock';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the ProdutoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

/*
@Injectable()
export class ProdutoService {

  private wsBaseUrl = 'http://localhost:8080/lojinha-rest/webresources'; // URL to web API

  constructor(public http: Http) { }

  listar(): Promise<Produto[]> {
    let url = this.wsBaseUrl + "/produto";
    return this.http.get(url).toPromise().then(this.extractData).catch(this.handleError);
  }

  obter(id: number): Promise<Produto> {
    let url = this.wsBaseUrl + "/produto/" + id;
    return this.http.get(url).toPromise().then(this.extractData).catch(this.handleError);
  }


  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error("Response status: " + res.status);
    }
    let body = res.json();
    return body || { };
  }

  private handleError(error: any) {
    let errorMsg = error.message || "Server error";
    return Promise.reject(errorMsg);
  }
*/

@Injectable()
export class ProdutoService {

	listar(): Promise<Produto[]> {
		return Promise.resolve(PRODUTOS).catch(this.handleError);
	}

	obter(id: number): Promise<Produto> {
		return Promise.resolve(PRODUTOS).then(
			// *** USANDO SINTAXE "ARROW FUNCTION DO ES2015 ***
			resultados => resultados.filter(prod => prod.id === id)[0]
	
			// Funcao abaixo eh equivalente à acima.
			//function(resultados) {
			//	return resultados.filter(function(prod) {
			//		return prod.id === id;
			//	})[0];
			//}
		).catch(this.handleError);
	}
	
	incluir(produto: Produto) {
		Promise.resolve(PRODUTOS).then(
			function(resultados) {
				let ultimo = resultados.reduce(function(prev, current) {
					return (prev.id > current.id) ? prev : current;
				});
				let proximoId = ultimo.id + 1;
				produto.id = proximoId;
				resultados.push(produto);
			}
		)
	}
  private handleError(error: any) {
    let errorMsg = error.message || "Server error";
    return Promise.reject(errorMsg);
  }

}