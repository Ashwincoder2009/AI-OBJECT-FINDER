status="";
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.size(500,400)
video.hide();
}
function Start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status:Object Detected";
objectDetected=document.getElementById("object_text").value;
}
function modelLoaded(){
console.log("Model Loaded!");
status=true;
}
function draw(){
image(video,0,0,500,400);
}