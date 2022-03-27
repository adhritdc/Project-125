RwristX = 0;
RwristY = 0;
LwristX = 0;
LwristY = 0;
difference = 0;
function setup()
{
    canvas = createCanvas(400,400);
    canvas.position(600,200);
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(100,200);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("model is loaded!");
}
function gotPoses(results)
{
    if (results.length > 0) 
    {
        console.log(results);
        RwristX = results[0].pose.rightWrist.x;
        RwristY = results[0].pose.rightWrist.y;
        LwristX = results[0].pose.leftWrist.x;
        LwristY = results[0].pose.leftWrist.y;
        difference = Math.floor(LwristX - RwristX);
        console.log("Right Wirst's X Position = " + RwristX + "Right Wirst's Y Position = " + RwristY + "Left Wirst's X Position = " + LwristX + "Left Wirst's Y Position = " + LwristY + "difference : " + difference);
        console.log("Left Wirst's X Position = " + results[0].pose.nose.x + "Left Wirst's Y Position = " + results[0].pose.nose.y);
    }
}
function draw()
{
    background("white");
    document.getElementById("font_size").innerHTML = "Font Size : " + difference + " px";
    textSize(difference);
    fill("#FFE787");
    text("Adhrit" , 50, 400)
}
