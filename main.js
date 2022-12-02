noseX=0;
noseY=0;
function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/rF0Y7Kxv/mustache-Copy.png")
}
function setup()
{
createCanvas(400, 400,);
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);
}
function draw() {
image(video, 0, 0, 300, 300);
}
function onclick() {

}
function take_snapshot(){
save('myFilterImage.png');
}
    
function gotPoses(results) 
{
if(results.length > 0)
{
console.log(results)
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}
function modelLoaded() {
console.log ('PoseNet Is Initialized')   ; 
}