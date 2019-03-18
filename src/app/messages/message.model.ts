// message.model.ts

export class Message{
	
	constructor(private text:string, private error:boolean = false,
					private responses?:Array<[string, () => void]>){
		

	}
	getResponses():Array<[string, () => void]>{
		return this.responses;

	}




	
}