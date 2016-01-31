// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


var preload;

function init() {
	if (!createjs.Sound.initializeDefaultPlugins()) {
		document.getElementById("error").style.display = "block";
		document.getElementById("content").style.display = "none";
		return;
	}

	//examples.showDistractor("content");
	var assetsPath = "/audio/";
	var sounds = [
		{src: "Game-Break.ogg", id: 1},
		{src: "Game-Spawn.ogg", id: 2},
		{src: "Game-Shot.ogg", id: 3},

		{src: "GU-StealDaisy.ogg", id: 4},
		{src: "Humm.ogg", id: 5},
		{src: "R-Damage.ogg", id: 6},

		{src: "Thunder1.ogg", id: 7},
		{src: "S-Damage.ogg", id: 8},
		{src: "U-CabinBoy3.ogg", id: 9},

		{src: "ToneWobble.ogg", id: 10},
		{src: "Game-Death.ogg", id: 11},
		{src: "Game-Break.ogg", id: 12}  //OJR would prefer a new sound rather than a copy
	];

	createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
	createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
	createjs.Sound.registerSounds(sounds, assetsPath);
}

function soundLoaded(event) {
	//examples.hideDistractor();
	var div = document.getElementById(event.id);
	div.style.backgroundImage = "url('../_assets/art/audioButtonSheet.png')";
}

function stop() {
	if (preload != null) {
		preload.close();
	}
	createjs.Sound.stop();
}

function playSound(target) {
	//Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
	var instance = createjs.Sound.play(target.id);
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	target.className = "gridBox active";
	instance.addEventListener("complete", function (instance) {
		target.className = "gridBox";
	});
}