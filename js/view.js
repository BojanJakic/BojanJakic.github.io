var view = {
    
	timer : 0,
		
	setChoosenNumber : function(value) {
		$("#" + model.currentField).text(value)

	},
	bindGroupOfElements : function() {
		
		$(".number_container > div,.operator_container > div").each(function() {
			view.bindElement($(this));
		})
	},
	
	unbindGroupOfElements : function(){
		$(".number_container > div,.operator_container > div").each(function() {
			view.unbindElement($(this));
		})
	},
	
	bindElement : function(elem){
		elem.addClass("click_bind");
		elem.bind("click",bindingEffect);
	},
	
	unbindElement : function(elem){
		elem.removeClass("click_bind");
		elem.unbind("click");
	},
	
	showNotification : function(message){
		//alert(message)
		$(".notification_text").text(message);
	},
	
	appendInput : function(input){
		$("#users_input").append(input);
	},
	
	deleteLast : function(lastInputLength){
		$("#users_input").text($("#users_input").text().slice(0,-(lastInputLength)));
	},
	
	showErrorNotification : function(message){
		var sound = getSounds("audio/error.mp3")
		
		var img = "images/milka.jpg"
		
		view.createNotification(message,img);
		
		var slideEffect = $(".notification_container");
		
		
		if(view.isAnimationVisible(slideEffect)){
			view.stopAnimation(slideEffect);
			view.startErrorAnimation(slideEffect,sound);
			
		}else{
			
			view.startErrorAnimation(slideEffect,sound);
		}
		
		function getEffect(){
		$(".notification_container").slideDown(1000).delay(2000).slideUp(1000);
		sound.play();
	   }
	},
	
	
	isAnimationVisible : function(animation){
		return animation.is(":visible");
	},
	
	stopAnimation : function(animation){
		animation.finish();
	},
	
	startErrorAnimation : function(animation,sound){
		console.log("start")
		$(".notification_container").slideDown(1000).delay(2000).slideUp(1000);
		sound.play();
	},
	
	showNotification : function(message,img,sound){
		view.createNotification(message,img);
		
		var slideEffect = $(".notification_container");
		
		if(view.isAnimationVisible(slideEffect)){
			view.stopAnimation(slideEffect);
			view.startAnimation(slideEffect,sound);
		}else{
			view.startAnimation(slideEffect,sound);
		}
		
		
    },
	
	startAnimation : function(animation,sound){
		animation.delay(1500).slideDown(1500,function(){
			sound.play();
		}).delay(4500).slideUp(1500);
	},
	
	addPlayAgainButton : function(){
		setTimeout(function(){
			$("#newgame").fadeIn(1000);
		},9500)
	},
	
	createNotification : function(message,img){
		$(".notification_image").css({"background":"url(" + img + ") center no-repeat","background-size":"cover"});
		$(".notification_text").text(message);
	},
	
	startTimer : function(){
		var time = $("#timer").text()
		var clockSound;
		
		timer = setInterval(function(){
			 time = parseInt(time) - 1;
			 $("#timer").text(time);
			 
			 if(time == 10){
				$("#timer").css("background-color","red");
				clockSound = getSounds("audio/clock.mp3");
				clockSound.play();
			 } 
			 if(time == 0){
				 view.stopTimer()
				 clockSound.pause();
				 controller.final();
			 }
		},1000)
	},
	
	stopTimer : function(){
		
		clearInterval(timer);
	},
	
	parseTarget : function(){
		var targetValue = "";
		$(".target_container > div:not(:last)").each(function(){
		  	targetValue += $(this).text();
		})
		return targetValue;
	},
	
	greeting : function(){
		var message = " Good Evening !";
		var sound = getSounds("audio/milka.mp3");
		sound.currentTime = 5;
		var img = "images/milka.jpg";
		view.showNotification(message,img,sound);
		view.addButtons();
	},
	
	addButtons : function(){
		setTimeout(function(){
			$("#buttons").fadeIn(1000);
		},9000)
	},
	
	removeButtons : function(){
		setTimeout(function(){
			$("#buttons").fadeOut(1000);
		},1000)
	},
	
	initView : function(){
		
		model.stopRollingNumbers();
		
		$("#container").fadeOut(1000,function(){
		view.updateTargetValue();
		view.updateNumberValue();
		view.updateTimerValue();
		view.updateInputValue();
		$("#newgame").hide();
		})
		$("#container").fadeIn(1000);
		
		view.greeting();
	},
	
	updateTargetValue : function(){
		$(".target_container > div").each(function(){
			$(this).text("?");
		})
	},
	
	updateNumberValue : function(){
		$(".number_container > div").each(function(index){
			
			if(index < 4){
				$(this).text("?");
			}else if(index == 4){
					$(this).text("??");
			}else{
				$(this).text("??(?)");
			}
		})
	},
	
	updateTimerValue : function(){
		$("#timer").text("60");
		$("#timer").css("background-color","#a3c2c2");
	},
	
	updateInputValue : function(){
		$("#users_input").text("");
	}
	
};