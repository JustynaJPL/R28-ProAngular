import { Product } from  "./product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class StaticDataSource {
	private data: Product[];

	constructor() {
		this.data = new Array<Product>(
			new Product(1, 'Kajak', 'Sporty Wodne', 275),
			new Product(2, 'Kamizelka ratunkowa', 'Sporty Wodne', 45),
			new Product(3, 'Piłka', 'Piłka nożna', 19.50),
			new Product(4, 'Flagi narożne', 'Piłka nożna', 35),
			new Product(5, 'Czapka', 'Szachy', 16),
			new Product(6, 'Wiosło', 'Sporty Wodne', 100),
			new Product(7, 'Koszulka', 'Piłka nożna', 25));
		}
		getData():Product[]{
			return this.data;

		}
	}