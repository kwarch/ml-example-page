'use strict';

let size = 10.5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // noLoop();
}

function draw() {
    background(30);
    fill(240);
    strokeWeight(0.5);
    stroke(240);
    line(mouseX, 0, mouseX, mouseY - size);
    line(mouseX, mouseY + size, mouseX, height);

    line(0, mouseY, mouseX - size, mouseY);
    line(mouseX + size, mouseY, width, mouseY);


    noFill();
    strokeWeight(0.5);
    ellipse(mouseX, mouseY, size * 2, size * 2);
}

function mousePressed() {
    
    redraw(4);
  }

