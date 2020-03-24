"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DEBUG = false;
var REPETITION_COUNT = 2; // number of times each pixel is assigned to a canvas

var NUM_FRAMES = 128;
/**
 * Generates the individual subsets of pixels that are animated to create the effect
 * @param {HTMLCanvasElement} ctx
 * @param {number} count The higher the frame count, the less grouped the pixels will look - Google use 32, but for our elms we use 128 since we have images near the edges
 * @return {HTMLCanvasElement[]} Each canvas contains a subset of the original pixels
 */

function generateFrames($canvas) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
  var width = $canvas.width,
      height = $canvas.height;
  var ctx = $canvas.getContext("2d");
  var originalData = ctx.getImageData(0, 0, width, height);

  var imageDatas = _toConsumableArray(Array(count)).map(function (_, i) {
    return ctx.createImageData(width, height);
  }); // assign the pixels to a canvas
  // each pixel is assigned to 2 canvas', based on its x-position


  for (var x = 0; x < width; ++x) {
    for (var y = 0; y < height; ++y) {
      for (var i = 0; i < REPETITION_COUNT; ++i) {
        var dataIndex = Math.floor(count * (Math.random() + 2 * x / width) / 3);
        var pixelIndex = (y * width + x) * 4; // copy the pixel over from the original image

        for (var offset = 0; offset < 4; ++offset) {
          imageDatas[dataIndex].data[pixelIndex + offset] = originalData.data[pixelIndex + offset];
        }
      }
    }
  } // turn image datas into canvas'


  return imageDatas.map(function (data) {
    var $c = $canvas.cloneNode(true);
    $c.getContext("2d").putImageData(data, 0, 0);
    return $c;
  });
}
/**
 * Inserts a new element over an old one, hiding the old one
 */


function replaceElementVisually($old, $new) {
  var $parent = $old.offsetParent;
  $new.style.top = "".concat($old.offsetTop, "px");
  $new.style.left = "".concat($old.offsetLeft, "px");
  $new.style.width = "".concat($old.offsetWidth, "px");
  $new.style.height = "".concat($old.offsetHeight, "px");
  $parent.appendChild($new);
  $old.style.visibility = "hidden";
}
/**
 * Disintegrates an element
 * @param {HTMLElement} $elm
 */


function disintegrate($elm) {
  html2canvas($elm).then(function ($canvas) {
    // create the container we'll use to replace the element with
    var $container = document.createElement("div");
    $container.classList.add("disintegration_container"); // setup the frames for animation

    var $frames = generateFrames($canvas, NUM_FRAMES);
    $frames.forEach(function ($frame, i) {
      $frame.style.transitionDelay = "".concat(1.35 * i / $frames.length, "s");
      $container.appendChild($frame);
    }); // then insert them into the DOM over the element

    replaceElementVisually($elm, $container); // then animate them

    $container.offsetLeft; // forces reflow, so CSS we apply below does transition

    if (!DEBUG) {
      // set the values the frame should animate to
      // note that this is done after reflow so the transitions trigger
      $frames.forEach(function ($frame) {
        var randomRadian = 2 * Math.PI * (Math.random() - 0.5);
        $frame.style.transform = "rotate(".concat(15 * (Math.random() - 0.5), "deg) translate(").concat(60 * Math.cos(randomRadian), "px, ").concat(30 * Math.sin(randomRadian), "px)\nrotate(").concat(15 * (Math.random() - 0.5), "deg)");
        $frame.style.opacity = 0;
      });
    } else {
      $frames.forEach(function ($frame) {
        $frame.style.animation = "debug-pulse 3s ease ".concat($frame.style.transitionDelay, " infinite alternate");
      });
    }
  });
}
/** === Below is just to bind the module and the DOM == */


_toConsumableArray(document.querySelectorAll(".disintegration_target")).forEach(function ($elm) {
  $elm.addEventListener("click", function () {
    if ($elm.disintegrated) {
      return;
    }

    $elm.disintegrated = true;
    disintegrate($elm);
  });
});