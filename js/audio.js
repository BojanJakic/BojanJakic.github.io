
function getSounds(mp3){
	
	var sounds;
	
	if(mp3 === "audio/clock.mp3"){
		 sounds = document.getElementById("sounds2");
	}else{
		 sounds = document.getElementById("sounds");
	}
	
	sounds.src = mp3;
	return sounds;
}