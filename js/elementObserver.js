'use strict';

export default class ElementObserver {
	constructor(elementId){
		this.element = document.getElementById(elementId);
		console.log(this.element);
	}
	
	update(model){
		this.element.innerHTML = model.getState();
	}
}