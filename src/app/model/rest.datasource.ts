// rest.datasource.ts
import {Injectable, Inject, InjectionToken} from "@angular/core";
import {HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from './product.model' ;
import {map,delay} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataSource{
	constructor(private http:HttpClient, @Inject(REST_URL) private url:string){

	}

	getData():Observable<Product[]>{
		let headers = new HttpHeaders();
			headers = headers.append('Access-key','<sekret>');
			headers = headers.append('Application-Name','exampleApp');
		return this.http.get<Product[]>(this.url,{headers:headers});
						// .pipe(delay(500));
		// return this.http.get(this.url).pipe(map(res => res as Product[]));
	}
	saveProduct(product:Product): Observable<Product>{
		return this.sendRequest('post', this.url, product);
		//return this.http.post<Product>(this.url,product);
		// return this.http.post(this.url, product)
		// 	.pipe(map(response =>response));
	}
	updateProduct(product:Product): Observable<Product>{
		return this.sendRequest('put', `${this.url}/${product.id}`, product);
		//return this.http.put<Product>(`${this.url}/${product.id}`, product);
		// return this.http.put(`${this.url}/${product.id}`, product)
		// 	.pipe(map(response =>response));
	}
	deleteProduct(id:number): Observable<Product>{
		return this.sendRequest('delete', `${this.url}/${id}`);
		//return this.http.delete<Product>(`${this.url}/${id}`);
		// return this.http.delete(`${this.url}/${id}`)
		// 	.pipe(map(response =>response));
	}

	private sendRequest(verb:string, url:string, body?:Product):Observable<Product>{
		let headers = new HttpHeaders();
			headers = headers.append('Access-key','<sekret>');
			headers = headers.append('Application-Name','exampleApp');
		switch (verb) {
			case "post":
				return this.http.post<Product>(url,body,{headers:headers})
					.pipe(catchError(err => { return throwError("Błąd sieci - 404")} ));
						// delay(500));
				break;
			case "put":
				return this.http.put<Product>(url,body,{headers:headers})
					.pipe(catchError(err => { return throwError("Błąd sieci - 404")} ));
						// delay(500));
				break;
			case "delete":
				return this.http.delete<Product>(url,{headers:headers})
					.pipe(catchError(err => {return throwError("Błąd sieci - 404")} ));
						// delay(500));
				break;
			default:
				console.log('Błąd requesta');
				break;
		}
	}
		
}



