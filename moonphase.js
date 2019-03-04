var frames = 1;
var phaseX;
var phaseZ;
let img;

function setup(){
	//img = loadImage('moon.jpg');
	createCanvas(600,600, WEBGL);
	frameRate(7);
	noStroke();
	

}


function draw(){
	
	background(0);

	mooncycle(250, 255, 255, 200, frames);
	
  	let lightX = map(phaseX, -1, 1, -500, 500);
  	let lightZ = map(phaseZ, -1, 1, -600, 500);
  	pointLight(255, 255, 255, lightX, 0, lightZ);
  	pointLight(255, 255, 255, lightX *1, 0, lightZ*1);
  	pointLight(255, 255, 255, lightX *1, 0, lightZ*1);	
	
  	
  	console.log("frames: "+frames+ " light: " + lightZ);

	
	if(frames > 29){
		frames = 0;
	}
	frames ++;
	
}


function mooncycle(size, r, g, b, phase){
	noStroke();
	ambientMaterial(r, g, b);
  	//texture(img); 	
	sphere(size);

	angleMode(DEGREES);
	phaseX = cos((360/30)*(phase-1)/2);
	phaseZ = sin((360/30)*(phase-1)/2);
	
}

