'use strict';

// Imports
import NumberModel from './numberModel.js';
import ElementObserver from './elementObserver.js';

// Principals
let mainNumber = new NumberModel();

// Observers
let homePageNumber = new ElementObserver('homepagenumber');
let homePageNumber2 = new ElementObserver('homepagenumber2');

// RegisterObservers
mainNumber.addObserver(homePageNumber);
mainNumber.addObserver(homePageNumber2);

// Global functions - declarations
window.Advance = function (){
	mainNumber.incrementCurrentNumber();
}

let elementIndex = 3;
window.AddElementAndSubscribeToObservable = function (){
	let elementId = "homepagenumber" + elementIndex;
	
	let observerElement = document.createElement('div');
	observerElement.setAttribute("id", elementId);
	observerElement.setAttribute("class", "number");	
	document.getElementById("observerElements").appendChild(observerElement);
	
	let observerToSubscribe = new ElementObserver(elementId);
	mainNumber.addObserver(observerToSubscribe);
	
	elementIndex++;
}

window.LogState = function (){
	return mainNumber;
}