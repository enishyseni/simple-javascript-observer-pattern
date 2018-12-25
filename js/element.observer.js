'use strict';

export default class ElementObserver {
	constructor(elementId){
		this.element = document.getElementById(elementId);
	}
	
	update(model){
		if(this.element.tagName.toLowerCase() === 'input'){
			this.element.value = model.getState();
		}
		else{
			this.element.innerHTML = model.getState();
		}		
	}
}