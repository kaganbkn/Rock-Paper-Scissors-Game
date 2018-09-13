var score_me=0,score_you=0;
function myfunction(me) {

	var items=['Rock','Paper','Scıssors'];
	document.getElementById("text").innerHTML = "Your Choose is &nbsp; &nbsp;"+items[me];
	var you=Math.floor(Math.random() * 3);
	document.getElementById("text1").innerHTML = "PC Choose is &nbsp; &nbsp;"+items[you];

  var temp=((me-you)%3+3)%3;

	if(temp==0){
		document.getElementById("text2").innerHTML = "DRAW";
		document.getElementById("me").innerHTML = ++score_me;
		document.getElementById("you").innerHTML = ++score_you;
	}
	else if(temp==1){
		document.getElementById("text2").innerHTML = "You WON";
		document.getElementById("me").innerHTML = ++score_me;
	}
	else
	{
		document.getElementById("text2").innerHTML = "You LOSE";
		document.getElementById("you").innerHTML = ++score_you;
	}
}
