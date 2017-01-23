var controller = {
		
		isStartButtonAvailable : function(){
			
			if(model.isButtonClickable){
				return false;
			}else{
				model.updateButton();
				return true;
			}
		},
		
		isStopButtonAvailable : function(){
			if(!model.isButtonClickable){
				return false;
			}else{
				model.increaseCurrentField();
				if(model.currentField < 10){
					return true;
					
				}else if(model.currentField == 10){
					model.updateButton();
					view.bindGroupOfElements();
					view.startTimer();
				}
				
			}
		},	
		validation : function(clicked){
		
			var valid = checkInput(clicked);
			
			if(valid){
				model.addUsersInput(clicked.text());
				if(clicked.hasClass("number")){
					view.unbindElement(clicked);
				}
			}else{
				view.showErrorNotification("Invalid input !");
			}
		
		},
		
		handleDeleteButton : function(){
		
		if(model.currentField !== 10){
			return false;
		}
		
		var lastInput = model.enteredUsersValue[model.enteredUsersValue.length - 1];
		   
		if(!isNaN(parseInt(lastInput))){
		  $(".number").each(function(){ 
					if($(this).text() == lastInput && !$(this).hasClass("click_bind")){
						view.bindElement($(this));
						return false;
					}
		   })
		}
		view.deleteLast(lastInput.length);
		model.deleteUsersInput();
	},
	
	handleDoneButton : function(){
        console.log(model.currentField)
		
		if(model.currentField < 10){

			return false;
		}
     controller.final();
		
	},
	
	final : function(){
		var target = view.parseTarget();
		var guess = evaluatedGuess(model.getFinalInput());
		controller.checkResult(target,guess);
		controller.finishGame();
	},
	
	checkResult : function(target,guess){
		if(guess == undefined){
		    
		  var message =  "Wrong! No mathematical expression entered";
		  var sound  = getSounds("audio/haha.mp3");
		  var img = "images/nelson.jpg";
	    
		}else if(guess == target){
			var message = "Correct! " + guess + " equals " + target;
		    var sound = getSounds("audio/applause.mp3");
		    var img = "images/applaus.png";
	    
	    }else{
	    	var message = "Wrong!  " + guess + " not equals "  +  target;
			var sound = getSounds("audio/haha.mp3");
		    var img = "images/nelson.jpg";
		}
		var clockSound = getSounds("audio/clock.mp3");
		clockSound.pause();
		view.showNotification(message,img,sound);
	},
	
	finishGame : function(){
		view.removeButtons();
		view.unbindGroupOfElements();
		view.stopTimer();
		view.addPlayAgainButton();
		model.currentField = 1;
		model.stopRollingNumbers();
	},
	
	handlePlayAgainButton : function(){
		view.initView();
		model.initModel();
	}
	
	
};
