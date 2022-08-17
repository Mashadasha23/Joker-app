var nose_x = 10;
var nose_y = 10;

function preload() {

    clown_img = loadImage("https://i.postimg.cc/rFMM3mG3/clown-nose-png-12.png");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    my_poseNet = ml5.poseNet(video, model_loaded);

    my_poseNet.on('pose', got_results);


}

function got_results(results) {

    if (results.length > 0) {

        //console.log(results);

        nose_x = results[0].pose.nose.x -210;

        nose_y = results[0].pose.nose.y -115;

        console.log("Nose X position : ", nose_x);


        console.log("Nose Y position : ", nose_y);
    }


}



function model_loaded() {

    console.log("PoseNet Model is Loaded");
}


function draw() {
    image(video, 0, 0, 300, 300);
    //fill("red");
    //circle(nose_x , nose_y, 30);
    image(clown_img, nose_x, nose_y, 30,30);
}






function takeSnap() {
    save("clown_nose_filter.png");
}


