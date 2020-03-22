'use strict';

class Rect {
    constructor(color) {
        this.startPoint = {
            x: mouseX,
            y: mouseY
            
        };
        this.color = color;
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

class ColorPicker {
    constructor(colorPickerDiv){
        this.buttons = colorPickerDiv.querySelectorAll('.color-preset');
        this.setColor(0);
        this.buttons.forEach(
            element => element.addEventListener('click', (event) =>{
                this.selectColor(event.target);
            }
        ));
    }

    selectColor(target) {
        let color = window.getComputedStyle(target).backgroundColor;
        this.setColor(color);
        this.buttons.forEach(element => element.classList.remove('selected'));
        target.classList.add('selected');
    }

    setColor(color){
        this.currentColor = color;
    }
}


let rects = [],
    isDrawing = false,
    currentElement = null,
    colorPicker = new ColorPicker(document.querySelector('.color-picker'));

function setup() {
    let canvas = createCanvas(256, 256);
    canvas.parent(document.querySelector('.canvas-wrapper'));
}

function draw() {
    background(255);
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
    currentElement = new Rect(colorPicker.currentColor);
}

function mouseReleased() {
    rects.push(currentElement);
    currentElement = null;
}

function drawCursor() {
    if (mouseX > 0 && mouseX < 256 && mouseY > 0 && mouseY < 256) {
        let size = 5.5;
        strokeWeight(0.5);
        stroke(130);
    
        line(mouseX, 0, mouseX, mouseY - size);
        line(mouseX, mouseY + size, mouseX, height);
    
        line(0, mouseY, mouseX - size, mouseY);
        line(mouseX + size, mouseY, width, mouseY);
    
    
        noFill();
        strokeWeight(0.5);
    }
}

