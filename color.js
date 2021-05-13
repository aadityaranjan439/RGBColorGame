
var num = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".squares");	
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var newgame = document.querySelector("#new");
var heading = document.querySelector("h1");
var mode = document.querySelectorAll(".mode");

function init(){
	setMode();
	reset();
	play();
}

init();

// function to set mode
function setMode(){
	// add eventlistener for each mode
	for(var i = 0; i < mode.length; i++){
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected");  	
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			
			// checking for mode and passing value of num for number of colors to be generated
			this.textContent === "Easy" ? num = 3: num = 6;
			reset();
		});
	}
}

newgame.addEventListener("click", function(){
		reset();
});


// function to set up color squares and reset
function reset(){
  	colors = generateColor(num);

	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	heading.style.background =  "#3366ff";
	message.textContent ="";
  
	for(var i =0;i < squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
	         }
  }
}




// function to change all squares to correct color
function changeColor(clickedColor){
	for(var i = 0;i < squares.length;i++){
		squares[i].style.background = clickedColor;
	}
}

// function to generate color list
function generateColor(num){
	var arr = [];
	// get color and push into arr
	for(var i= 0; i < num; i++){
		arr.push(randomColor());

		
	}

return arr;
}

// function to generate 1 random color
function randomColor(){
	 // pick red
	 var r = Math.floor(Math.random()*256);
	 // pick green
	 var g = Math.floor(Math.random()*256);
	 // pick blue
	 var b = Math.floor(Math.random()*256);

	 return "rgb("+r+", "+g+", "+b+")"

}

// function to pick a color from colors list
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

// function to drive the game
function play(){

 for(var i =0;i < squares.length;i++){
	squares[i].addEventListener("click", function(){
		// get color of clicked square
		var clickedColor = this.style.background;
		// compare the colors
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			message.style.color = "#1aff1a";
			changeColor(clickedColor);
			heading.style.background = clickedColor;


		}

		else {
			this.style.background = "#232323";
			message.textContent = "Try Again"
			message.style.color = "#cc0000";
		}

		
		
	});
  }
}

