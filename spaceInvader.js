"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.beginPath();
context.fillStyle ="black";
context.rect(200,200,300,300);
context.fill();

let x = 225;
let y = 225;

function drawSquare(x,y,width,height){ 
    context.beginPath();
    context.fillStyle ="#66FF00";
    context.rect(x,y,width,height);
    context.fill();
    }
drawSquare(x,y+50,50,50);
drawSquare(x,y+100,50,50);
drawSquare(x,y+200, 50,50);
drawSquare(x+50,y,50,50);
drawSquare(x+50,y+100,50,50);
drawSquare(x+50,y+150,50,50);
drawSquare(x+100,y,50,50);
drawSquare(x+100,y+150,50,50);
drawSquare(x+100,y+200,50,50);
drawSquare(x+100,y+200,50,50);
drawSquare(x+150,y,50,50);
drawSquare(x+150,y+100,50,50);
drawSquare(x+150,y+150,50,50);
drawSquare(x+200,y+50,50,50);
drawSquare(x+200,y+100,50,50);
drawSquare(x+200,y+200,50,50);