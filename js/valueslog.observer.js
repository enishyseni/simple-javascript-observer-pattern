'use strict';

export default class ValuesLogObserver {
	constructor(){
		this.log = [];
		this.logPersistanceCheckpoint = 11;
	}
	
	update(model){		
		this.log.push(model.getState());
		if(this.log.length == this.logPersistanceCheckpoint)
		{
			this.persistLog();   // Save to console
			this.log = [];  	 // Reset log.
			console.log("Values log reset.");
		}		
	}
	
	persistLog(){		
		for(let l of this.log){
			console.log("Values log observer persisted: " + l);
		}		
	}
}