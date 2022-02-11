function preload(){
    img = loadImage("https://media1.giphy.com/media/UqUHuT6y9mK5HfsYFm/giphy.gif?cid=6c09b952tkrxotzrn6ptxivw44i5ke6qp411ja7vu7daejmw&rid=giphy.gif");
}

function setup() {
    canvas = createCanvas(1000,500,);
    canvas.position(150,300);
    video = createCapture(VIDEO);
    video.hide();
    color_name = "";
    frame_name = "";
}

function draw() {
    image(video,0,0,900,400);
    tint(color_name);

    if (frame_name == "Circle"){
        Draw_circle()
    } 

    else if(frame_name == "Circle2"){
        Draw_Circle2()
    }

    else if(frame_name == "Line"){
        Draw_Line()
    } 

    else if(frame_name == "Triangle"){
        Triangle1()
    } 

    else if(frame_name == "Li-ci"){
        Draw_Lici()
    }

    
}

function takeSnapshot(){
    frame_name = document.getElementById("frame_name").value;
    color_name = document.getElementById("color_name").value;
}

function Draw_circle(){
    fill(164, 231, 46 );
    stroke(0,180,0);
    circle(30,30,50);

    fill(27, 227, 195 );
    stroke(0,180,0);
    circle(850,30,50);

    fill(212, 27, 227 );
    stroke(0,180,0);
    circle(450,30,50);

    fill(243, 11, 11 );
    stroke(0,180,0);
    circle(450,360,50);

    fill(233, 243, 11 );
    stroke(0,180,0);
    circle(850,360,50);

    fill(59, 129, 146 );
    stroke(0,180,0);
    circle(30,360,50);
}

function Draw_Circle2(){
    stroke(9, 70, 241);
    fill("#f804");
    circle(400,200,370)
}

function Draw_Line(){
    fill(0,0,130);
    stroke(0,0,130);
    rect(20,20,850,10);
    rect(20,30,10,350);
    rect(20,380,850,10);
    rect(870,20,10,350);
}

function Triangle1(){
    stroke(0, 236, 255);
    fill("#f003");
    triangle(400,10  ,100,370  ,700,370);
}

function Draw_Lici(){
    fill(107,225,208);
    stroke(128,0,0);
    circle(30,30,50);

    fill(248,255,0);
    stroke(52,227,27);
    rect(60,20,770,10);

    fill(13, 255, 0);
    stroke(244, 255, 0);
    circle(30,370,50);

    fill(255, 177, 0);
    stroke(52,227,27);
    rect(60,370,780,10);

    fill(0, 53, 255);
    stroke(128,0,0);
    circle(870,30,50);

    fill(255, 0, 254);
    stroke(128,0,0);
    circle(870,370,50);
}

function downLoad(){
    save('canvas_images.png');
}