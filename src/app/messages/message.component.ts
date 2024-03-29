// message.component.ts

import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';
import {Observable} from "rxjs";
import {Router, NavigationEnd, NavigationCancel} from '@angular/router';
import {filter} from  'rxjs/operators'; 

@Component({
  selector: 'paMessages',
  moduleId:'module.id',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.scss']
})
export class MessageComponent {
  lastMessage:Message;

  constructor(messageService:MessageService, router:Router){
  	messageService.messages.subscribe(m => this.lastMessage=m);
  	router.events
  		.pipe(filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel))
  		.subscribe(e => { this.lastMessage = null;});
  }
}
