

$("#start").on("click",function(){
	
		if (!controller.isStartButtonAvailable()) {
			return;
		}else{
			
			model.startRollingNumbers();
		}
});

$("#stop").on("click",function(){
	if(!controller.isStopButtonAvailable()){
		return;
   }else{
      model.stopRollingNumbers();
      model.startRollingNumbers();
 	} 
});

$("#delete").on("click",function(){
	controller.handleDeleteButton();
})

$(".done").on("click",function(){
	controller.handleDoneButton();
})

$("#newgame").on("click",function(){
	controller.handlePlayAgainButton();
})


function bindingEffect(){

	var clicked = $(this);
    controller.validation(clicked);
}


