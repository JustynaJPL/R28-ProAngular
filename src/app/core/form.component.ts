// form.component.ts

import {Component, Inject} from "@angular/core";
import {Product} from "../model/product.model";
import {NgForm} from "@angular/forms";
import {Model} from "../model/repository.model";
// import {MODES,SharedState, SHARED_STATE} from "./sharedState.model";
// import {Observable} from "rxjs";
// import { filter } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
// import {distinctUntilChanged, skipWhile} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
	selector:"paForm",
	moduleId:'module.id',
	templateUrl:"form.component.html",
	styleUrls:["form.component.scss"]
	
})
export class FormComponent {
	
	product:Product = new Product();
	originalProduct = new Product();
	
	constructor(private model:Model,activeRoute:ActivatedRoute,
		private router:Router){

		activeRoute.params.subscribe(params => {
			this.editing = params['mode'] == 'edit';
			let id=params['id'];
			if(id!=null){
			Object.assign(this.product,model.getProduct(id) || new Product());
			Object.assign(this.originalProduct,this.product);
			}});	
	}
	
	 
	editing:boolean = false;

	submitForm(form:NgForm){
		if(form.valid){
			this.model.saveProduct(this.product);
			this.originalProduct = this.product;
			this.router.navigateByUrl('/');	
		}
	}

	// resetForm(){
	// 	this.product = new Product();
	// }

}