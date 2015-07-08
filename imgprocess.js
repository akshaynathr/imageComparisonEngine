//function to populate the canvas with images
function setCanvas(CanvasName){
	var c=document.getElementById(CanvasName);
	var ctx=c.getContext("2d");
	//var img=document.getElementById("img1");
	var img=new Image();
	img.src="img1"
	img.onload=function(){
	ctx.drawImage(img,0,0,img.width,img.height,0,0,c.width,c.height);}
	}

