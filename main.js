function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);
    fill(137,207,240);
    stroke(137,207,240);
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    
    fill(230,230,250);
    stroke(230,230,250);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(500, 90, 20, 300);
}

function take_snapshot() {
    save('Sugathri.png');
}