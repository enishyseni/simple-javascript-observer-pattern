'use strict';

export default class NumberSubject {	
	constructor() {
		this.currentNumber = 0;
		this.observers = [];
	}
	
	subscribe(o){
		this.observers.push(o);
		o.update(this);
	}
	
	unsubscribe(o){
		o.setAttribute("style", "background-color: #BBB;");
		this.observers = this.observers.filter(function(el) {
			return el.element.id != o.id;		
		});
	}
	
	notifyObservers(){
		let that = this;
		for(let o of this.observers){
			setTimeout(function(){ o.update(that); }, Math.floor(Math.random() * 700));
		}
	}
	
	incrementCurrentNumber(){
		this.currentNumber++;
		this.notifyObservers();
	}
	
	getState(){
		return this.currentNumber;
	}
}