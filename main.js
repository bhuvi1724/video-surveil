video="";
status="";
function setup()
{
    canvas= createCanvas(550,400);
    canvas.center();

}
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function draw(){
    image(video,0,0,550,400);
}
function start(){
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:objects detected";
}
function modelLoaded(){
console.log("model Loaded");
video.loop();
video.speed(1);
video.volume(0);
}


