'use strict';

export default class NumberModel {	
	constructor() {
		this.currentNumber = 0;
		this.observers = [];
	}
	
	addObserver(o){
		this.observers.push(o);
		o.update(this);
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