// productTable.component.ts

import {Component, Inject} from "@angular/core";
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";
import {ActivatedRoute} from '@angular/router';
import {HighlightTrigger} from './table.animations';
// import {MODES,SharedState, SHARED_STATE} from "./sharedState.model";
// import {Observer} from 'rxjs';
import {AnimationEvent} from "@angular/animations";



@Component({
	selector:"paTable",
	moduleId: 'module.id',
	templateUrl:"table.component.html",
	animations:[HighlightTrigger]
})
export class TableComponent {
	category:string = null;

	constructor(private model:Model, activeRoute:ActivatedRoute){
		activeRoute.params.subscribe(params =>{
			this.category=params["category"] || null;
		})

	}

	getProduct(key:number): Product{
		return this.model.getProduct(key);
	}

	getProducts():Product[]{
		console.log(""+this.model.getProducts());
		return this.model.getProducts()
			.filter(p => this.category == null || p.category == this.category)
			;
	}

	getCategories():string[]{
		return this.model.getProducts()
				.map(p=>p.category)
					.filter((category,index,array) => array.indexOf(category) == index);
	}

	deleteProduct(key:number){
		this.model.deleteProduct(key);
	}

	highlightCategory:string='';

	getRowState(category:string):string{
		return this.highlightCategory == "" 
		?	"": this.highlightCategory == category 
			?	 "selected" : "notselected";

	}

	writeAnimationEvent(event:AnimationEvent, name:string, start:boolean){
		console.log("Animacja " + name + (start ? ' rozpoczęta':' zakończona')
			+ ' w stanie ' + event.fromState + ' ze stanu ' + event.toState +
			', czas trwania: ' + event.totalTime + '.')
	}
	
	// editProduct(key:number){
	// 	this.observer.next(new SharedState(MODES.EDIT, key));
	// }

	// createProduct(){
	// 	this.observer.next(new SharedState(MODES.CREATE));
	// }

}