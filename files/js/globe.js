"use strict";

/*--------------------
Vars
--------------------*/
var time = 0;
var mouseX = window.innerWidth * 0.75;
var x = 0;
/*--------------------
Options
--------------------*/

var opt = {
  radius: 100,
  radiusY: 0.4,
  maxSpeed: 0.05,
  maxRotation: 50,
  minOpacity: 0.3,
  spacer: '*'
};
/*--------------------
Utils
--------------------*/

var scale = function scale(a, b, c, d, e) {
  return (a - b) * (e - d) / (c - b) + d;
};

var lerp = function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
};
/*--------------------
Create Invaders
--------------------*/


var letter;

var createText = function createText() {
  var word = document.querySelector('.word');
  var Letters = word.innerHTML.replace(/\s/g, opt.spacer).split('').reverse();
  word.innerHTML = '';
  Letters.forEach(function (i) {
    var l = document.createElement('span');
    l.innerHTML = i;
    word.appendChild(l);
  });
  letter = document.querySelectorAll('.word span');
};

createText();
/*--------------------
Animate
--------------------*/

var animate = function animate() {
  if (!letter) return;
  x = lerp(x, mouseX / window.innerWidth, 0.1);
  var rotation = -opt.maxRotation + x * opt.maxRotation * 2;
  var speed = -opt.maxSpeed + x * opt.maxSpeed * 2;
  var modY = 1 + x * -2;
  time -= speed;
  letter.forEach(function (i, ind) {
    var theta = 1 - ind / letter.length;
    var x = opt.radius * Math.sin(time + theta * Math.PI * 2);
    var y = opt.radius * opt.radiusY * Math.cos(modY + time + theta * Math.PI * 2);
    var s = scale(y, -opt.radius * opt.radiusY, opt.radius * opt.radiusY, opt.minOpacity, 1);
    Object.assign(i.style, {
      zIndex: Math.min(2, Math.max(-2, Math.ceil(y))),
      filter: "blur(".concat(4 - 5 * s, "px)"),
      opacity: s,
      transform: "translate3d(".concat(x, "px, ").concat(y, "px, 0) rotate(").concat(rotation, "deg)")
    });
  });
  requestAnimationFrame(animate);
};

animate();
/*--------------------
Events
--------------------*/

var handleMouse = function handleMouse(e) {
  mouseX = e.clientX
  if($(window).width() < 991){
    e.touches[0].clientX;
  }
};

window.addEventListener('mousemove', handleMouse);
window.addEventListener('touchstart', handleMouse);
window.addEventListener('touchmove', handleMouse);