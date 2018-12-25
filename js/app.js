'use strict';

// Imports
import NumberSubject from './number.subject.js';
import ElementObserver from './element.observer.js';
import ValuesLogObserver from './valueslog.observer.js';

// Subjects
let mainNumber = new NumberSubject();

// Register Observers
mainNumber.subscribe(new ValuesLogObserver());
mainNumber.subscribe(new ElementObserver('homepagenumber'));
mainNumber.subscribe(new ElementObserver('homepagenumber2'));
mainNumber.subscribe(new ElementObserver('homepagenumber3'));

// Global functions - declarations
window.Advance = function () {
	mainNumber.incrementCurrentNumber();
}

window.Unsubscribe = function () {
	mainNumber.unsubscribe(this);
}

let elementIndex = 4; // There are already 3 sample elements defined in the DOM

window.AddNonInputElementAndSubscribeToObservable = function () {
	let elementId = "homepagenumber" + elementIndex;
	
	let observerElement = document.createElement('div');
	observerElement.setAttribute("id", elementId);
	observerElement.setAttribute("class", "noninput");
	observerElement.addEventListener("click", window.Unsubscribe);
	document.getElementById("observerElements").appendChild(observerElement);
	
	mainNumber.subscribe(new ElementObserver(elementId));
	
	elementIndex++;
}

window.AddInputElementAndSubscribeToObservable = function () {
	let elementId = "homepagenumber" + elementIndex;
	
	let observerElement = document.createElement('input');
	observerElement.setAttribute("id", elementId);
	observerElement.setAttribute("class", "input");
	//observerElement.addEventListener("click", window.Unsubscribe);
	document.getElementById("observerElements").appendChild(observerElement);
	
	mainNumber.subscribe(new ElementObserver(elementId));
	
	elementIndex++;
}

window.LogState = function () {
	return mainNumber;
}

// Add event listeners to 3 sample DOM elements
let element = document.getElementById('homepagenumber');
element.addEventListener("click", window.Unsubscribe);
element = document.getElementById('homepagenumber2');
element.addEventListener("click", window.Unsubscribe);
element = document.getElementById('homepagenumber3');
element.addEventListener("click", window.Unsubscribe);