canvas=document.getElementById('my_canvas');
ctx=canvas.getcontext("2d");

//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=10
greencar_y=200

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	greencar_imgTag.onload = uploadgreencar;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);


}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	function up(){
		if (greencar_y  >=0){
			greencar_y=greencar_y-block_image_height;
			console.log("block_image_height"+block_image_height);
			console.log("when up is pressed ,X="+ player_x +",Y="+player_y); 
			canvas.remove(player_object);
			player_update();
		} 
	}
	
	
}

function down()
{
	function down(){
		if (player_y  <=500){
			player_y=player_y+block_image_height;
			console.log("block_image_height"+block_image_height);
			console.log("when down is pressed ,X="+ player_x +",Y="+player_y); 
			canvas.remove(player_object);
			player_update();
		} 
	}	
}

function left()
{
	function left(){
		if (player_x  >=0){
			player_x=player_x-block_image_width;
			console.log("block_image_width"+block_image_width);
			console.log("when left is pressed ,X="+ player_x +",Y="+player_y); 
			canvas.remove(player_object);
			player_update();
		} 
	}
}
	

function right()
{
	function right(){
		if (player_x  <=500){
			player_x=player_x+block_image_width;
			console.log("block_image_width"+block_image_width);
			console.log("when right is pressed ,X="+ player_x +",Y="+player_y); 
			canvas.remove(player_object);
			player_update();
		} 
	}
}

