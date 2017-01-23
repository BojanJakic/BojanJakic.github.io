var model = {
	isButtonClickable : false,
	enteredUsersValue : [],
	currentField : 1,
	numbersInterval : 0,
	
	
	startRollingNumbers : function(){
		
		if(model.currentField == 10){
			return false;
		}
		numbersInterval = setInterval(function(){
	    	 var value = getNumber();
			 view.setChoosenNumber(value);
			},60)
	},

    stopRollingNumbers : function(){
	    clearInterval(numbersInterval);
    },
	
	updateButton : function(){
		if(model.isButtonClickable){
			model.isButtonClickable = false;
		}else{
		    model.isButtonClickable = true;
			
		}
	},
    
    increaseCurrentField : function(){
    	model.currentField++;
    },
	
	addUsersInput : function(lastInput){
		model.enteredUsersValue.push(lastInput);
		view.appendInput(lastInput)
	},
    
    deleteUsersInput : function(){
    	model.enteredUsersValue.pop();
    },
    
    getFinalInput : function(){
    	
    	var input = "";
    	
    	for(var i = 0; i < model.enteredUsersValue.length;i++){
    		input += model.enteredUsersValue[i];
    	}
    	return input;
    },
    
    initModel : function(){
    	model.isButtonClickable = false;
    	model.enteredUsersValue = [];
    	model.currentField = 1;
    	model.numbersInterval = 0;
    }
    
    
	
};
