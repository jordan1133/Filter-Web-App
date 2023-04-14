noseX=0;
noseY=0;

function preload() 
{
mustashe = loadImage('https://i.postimg.cc/rpF818fb/mustache.png');
}


function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
    
}


function take_snapshot() {
    Save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -8
        noseY = results[0].pose.nose.y 
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
    }
}

function draw() {
    image(video,0,0,300,300);
    
image(mustashe, noseX, noseY, 30, 30);
    }