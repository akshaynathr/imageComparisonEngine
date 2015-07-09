//function to populate the canvas with images
//
var resemblecontrol;
function setCanvas(CanvasName,url){
	var c=document.getElementById(CanvasName);
	var ctx=c.getContext("2d");
	//var img=document.getElementById("img1");
	var img=new Image();
	//img.src="img1.jpg"
	img.src=document.getElementById(url).value;
	tsrc=document.getElementById(url).value;
	img.onload=function(){
	ctx.drawImage(img,0,0,img.width,img.height,0,0,c.width,c.height);}
	imageprocess(tsrc);
	}

function imageprocess(img) {
	
		var api=resemble(img).onComplete(function(data){
		console.log(data);
		});

}
function process(){
	var message="Images are ";
	var end=" % similar";
				
	 resemblecontrol=resemble(document.getElementById('url1').value).compareTo(document.getElementById('url2').value).onComplete(function(data) {console.log(data);
	// resemblecontrol.ignoreAntialiasing();
	//resemblecontrol.repaint();
		var similar=100-data.misMatchPercentage;
		alert(message+similar+end);});
 }
