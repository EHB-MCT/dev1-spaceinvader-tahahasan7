"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.beginPath()
context.fillStyle ="black"
context.rect(200,200,300,300)
context.fill()

context.beginPath()
context.rect(275,225,50,50);
context.rect(225,275,50,50);
context.rect(225,325,50,50);
context.rect(325,225,50,50);
context.rect(375,225,50,50);
context.rect(275,325,50,50);
context.rect(325,375,50,50);
context.rect(275,375,50,50);
context.rect(375,375,50,50);
context.rect(425,275,50,50);
context.rect(425,325,50,50);
context.rect(325,425,50,50);
context.rect(225,425,50,50);
context.rect(425,425,50,50);
context.rect(375,325,50,50);
context.fillStyle = "#66FF00"
context.fill()
