
function getNumber(){
	var numbers = getScope();
	
	var currentIndex = Math.floor(Math.random() * numbers.length);
	var currentValue = numbers[currentIndex];
	
	return currentValue;
	
}



function getScope(){
	var scope = [];
	
	if(model.currentField < 4){
		scope = [0,1,2,3,4,5,6,7,8,9];
	}else if (model.currentField < 8) {
		scope = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	} else if (model.currentField < 9) {
		scope = [ 10, 15, 20, 25 ];
	} else {
		scope = [ 50, 75, 100 ];
	}
	return scope;
}

function checkInput(clicked){
	var input = "";
	var valid = true;
	
	if(model.enteredUsersValue.length == 0){
		input = clicked.text();
	}else{
		input = model.enteredUsersValue[model.enteredUsersValue.length - 1] + clicked.text();
	}
	
	valid = isInputValid(input,clicked);
	return valid;
	
}

function isInputValid(input,clicked){
	
	if(clicked.text() == ")"){
		if(!checkParenthesis()){
			return false;
		}
	}
	
	if(model.enteredUsersValue.length == 0){
		var regexp = new RegExp(/(\d{1,3}|\()/);
	}else{
		var regexp = new RegExp(/([\+\-\*\/](?=[0-9]{1,3}|\())|([0-9]{1,3}(?=[\+\-\*\/\)]))|\((?=[0-9]{1,3}|\()|\)(?=[\+\-\*\/\)])/);
	}
	
	var boo = regexp.test(input);
	return boo;
	
}

function checkParenthesis(){
	var open = 0;
	var close = 0;
	
	for(var i = 0; i < model.enteredUsersValue.length;i++){
		if(model.enteredUsersValue[i] == "("){
			open++;
		}else if(model.enteredUsersValue[i] == ")"){
			close++;
		}
	}
	
	if(close >= open){
		return false;
	}
	
	return true;
}

function evaluatedGuess(guess){
	
	try{
	
		var temp = eval(guess);
	
	}catch(e){}
	
	return temp;
}



