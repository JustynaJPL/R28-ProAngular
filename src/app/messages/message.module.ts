// message.module.ts
import {NgModule, ErrorHandler} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";


import {MessageComponent} from "./message.component";
import {MessageService} from "./message.service";
import {MessageErrorHandler} from './errorHandler';
import {RouterModule} from '@angular/router';



@NgModule({
	imports:[BrowserModule,RouterModule],
	declarations:[MessageComponent],
	providers:[MessageService,{provide:ErrorHandler, useClass: MessageErrorHandler} ],
	exports:[MessageComponent]
})
export class MessageModule {	
	
}