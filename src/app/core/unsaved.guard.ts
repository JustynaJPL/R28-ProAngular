import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {MessageService} from "../messages/message.service";
import {Message} from '../messages/message.model';
import {Subject, Observable} from 'rxjs';
import {FormComponent} from './form.component';

@Injectable()
export class UnsavedGuard{
	constructor(private messages:MessageService, private router:Router){

	}

	canDeactivate(component:FormComponent, route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
	:Observable<boolean>|boolean{
		if (component.editing) {
			if (['name','category','price']
					.some(prop => component.product[prop] 
						!= component.originalProduct[prop])) {
				let subject=new Subject<boolean>();
			let responses:Array<[string, () => void]> = 
				[['Tak', () => {
					subject.next(true);
					subject.complete();
				}],
				['Nie', () => {
					this.router.navigateByUrl(this.router.url);
					subject.next(false);
					subject.complete();
					}]
				];
				this.messages.reportMessage(new Message('Odrzucić zmiany?', true, responses));
				return subject;
			}
		}
		return true;
			

	}
	


}