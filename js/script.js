'use strict';

let rects = [],
    isDrawing = false,
    currentElement = null;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(30);
    fill(240);

    if (rects.length > 0) {
        rects.forEach(element => element.show());
    }
    if (currentElement != null) {
        currentElement.setEndpoint();
        currentElement.show();
    }

    drawCursor();
    
}

function mousePressed() {
    currentElement = new Rect();
}

function mouseReleased() {
    rects.push(currentElement);
    currentElement = null;
}

function drawCursor() {
    let size = 5.5;

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

class Rect {
    constructor() {
        this.startPoint = {
            x: mouseX,
            y: mouseY
        };
        this.color = 250;
    }

    setEndpoint() {
        this.endPoint = {
            x: mouseX - this.startPoint.x,
            y: mouseY - this.startPoint.y
        };
    }

    show() {
        fill(this.color);
        noStroke();
        rect(
            this.startPoint.x,
            this.startPoint.y,
            this.endPoint.x,
            this.endPoint.y);
    }
}