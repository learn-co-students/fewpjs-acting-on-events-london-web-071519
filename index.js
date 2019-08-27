// Your code here

// Move Item Left

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerLeft() {
var leftNumbers = dodger.style.left.replace("px", "");
var left = parseInt(leftNumbers, 10);

if (left > 0) {
    dodger.style.left = `${left - 1}px`;
}
}

// Move Item Right

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace("px", "");
    var right = parseInt(rightNumbers, 10);
   
    if (right < 360) {
      dodger.style.left = `${right + 1}px`;
    }
  }

// Move Item Up

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp") {
      moveDodgerUp();
    }
  });

function moveDodgerUp() {
    var upNumbers = dodger.style.bottom.replace("px", "");
    var up = parseInt(upNumbers, 10);
   
    if (up < 380) {
      dodger.style.bottom = `${up + 1}px`;
    }
  }

//   Move Item Down

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowDown") {
      moveDodgerDown();
    }
  });

  function moveDodgerDown() {
    var downNumbers = dodger.style.bottom.replace("px", "");
    var down = parseInt(downNumbers, 10);
   
    if (down > 0) {
      dodger.style.bottom = `${down - 1}px`;
    }
  }