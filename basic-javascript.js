/* Used in single player (HTML page 2) */
/* Function called on load by body tag */
/* Function SinglePlayerDataExtract() is used to extract data for bottom music player display send by page music player (HTML page 1) to single player (HTML page 2)*/


function SinglePlayerDataExtract() {
	var getBottomPlayer = document.getElementById("bottom-music-player");
	var searchData = decodeURIComponent(window.location.search);
	searchData=searchData.substring(3);
	getBottomPlayer.style.display = searchData;
}

/* Used in music player project (HTML page 1) */
/* Function called on click of "Popular Artist-Coldplay" to redirect to HTML page 2 */
/* Function RedirectToPage2() is used to send data for bottom music player display by page music player (HTML page 1) to single player (HTML page 2) and 
also redirects to HTML Page 2 from HTML Page 1*/


function RedirectToPage2() {
	var getBottomPlayer = document.getElementById("bottom-music-player");
	if(getBottomPlayer.style.display === "block"){
		getBottomPlayer= "block";
	}
	else{
    		getBottomPlayer = "none";
	}
	window.location.href="single-player.html?x="+getBottomPlayer;
}

/* Used in music player project (HTML page 1) */
/* Function called on click of "Latest Release" Onism image -1 */
/* Function bottomMusicPlayer1() is called on click of "Latest Release" Onism image -1 which displays bottom music player on click and hide the bottom music 
player on clicking pause */


function bottomMusicPlayer1() {
	var audio = document.getElementById("audio");
	var getBottomPlayer = document.getElementById("bottom-music-player");
	var pause = document.getElementById("pause");
	var play = document.getElementById("play");
	if(getBottomPlayer.style.display === "none"){
		getBottomPlayer.style.display = "block";
		pause.style.display = "block";
		play.style.display = "none";
		audio.play();
	}
	else{
		getBottomPlayer.style.display = "none";
		pause.style.display = "none";
		play.style.display = "block";
		audio.pause();
	}
}


/* Used in music player project (HTML page 1) */
/* Function called on click of "Latest Release" Onism image -2,3 and 4 */
/* Function bottomMusicPlayer234() is called on click of "Latest Release" Onism image -2,3 and 4 which displays bottom music player on click and hide the 
bottom music player on clicking play again */


function bottomMusicPlayer234() {
	var audio = document.getElementById("audio");
	var getBottomPlayer = document.getElementById("bottom-music-player");
	if(getBottomPlayer.style.display === "none"){
		getBottomPlayer.style.display = "block";
		audio.play();
	}
	else{
    		getBottomPlayer.style.display = "none";
		audio.pause();
	}
}