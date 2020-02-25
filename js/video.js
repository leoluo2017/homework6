var video;
var volume;
var slider;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video)
	volume = document.querySelector("#volume")
	console.log(volume);
	volume.innerHTML=video.volume*100+"%";
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -=.1
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate +=.1
	console.log("Speed is "+ video.playbackRate);
} 

// function skipAhead() {

// 	console.log("Current location is "+ );
// } 

function mute() { 
	console.log(video.muted)
	if(video.muted==true){
		video.muted=false;
		document.querySelector("#mute").innerHTML="unmuted"
		console.log("changing to Unmuted");
	}
	else{
		video.muted=true;
		document.querySelector("#mute").innerHTML="muted"
		console.log("changing to muted");
	}

}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume=slider.value/100;
	console.log("Volume is "+volume.volume/100);
	volume.innerHTML=video.volume*100+"%";
}
       

// function gray() { 

// 	console.log("In grayscale")
// }

// function color() {

// 	console.log("In color") 
// }
