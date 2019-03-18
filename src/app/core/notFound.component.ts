import {Component} from '@angular/core';

@Component({
	selector:'paNotFound',
	template: `<h3 class='bg-danger p-3'>Przepraszamy wystąpił błąd</h3>
				<button class='btn btn-primary' routerLink='/' > Spróbuj ponownie</button> `
})
export class NotFoundComponent{
	
}