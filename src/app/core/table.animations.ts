import {trigger, style,state,transition, animate,group } from "@angular/animations";
import {getStylesFromClasses} from './animationsUtils';
const commonStyles={
	'border':'black solid 4px',
	'color':'white'
}

export const HighlightTrigger = trigger('rowHighlight', [
	state('selected', 
		// style(getStylesFromClasses(['bg-success', 'h2']))
		style([
		commonStyles,
	{
		'background-color':'lightgreen',
		'font-size':'20px'
	}])
	),
	state('notselected', 
		// style(getStylesFromClasses('bg-info'))
	 style([commonStyles, {
		'background-color':'lightsalmon',
		'font-size':'12px',
		"color":'black'
	}])
	 ),
	// state('*', style({
	// 	'background-color':"white"
	// })),
	state('void', style({
		// "opacity":0
		'transform':'translateX(-50%)'
	})),
	transition('* => notselected',animate('200ms')),
	transition('* => selected',animate('400ms 200ms ease-in')),
	// transition('* => selected',animate('400ms 200ms ease-in-out',style({
	// 	'background-color':'lightblue',
	// 	'font-size':'25px'
	// }))),
	
	// transition('notselected => *',animate('500ms')),

	// transition('selected => *',animate('500ms')),
	
	// transition('* =>selected',
	//  [animate('400ms 200ms ease-in',
	//  	style({
	//  		'background-color':'lightblue',
	//  		'font-size':'25px'
	//  	})),
	//  group([
	//  	animate('250ms',style({
	//  		'background-color':'lightcoral'	 		
	//  	})),
	//  	animate('450ms',style({
	//  		'font-size':'30px'
	//  	}))]),
	//  	animate('200ms')
	//  ]),
	transition('void => *',animate('500ms'))
]);