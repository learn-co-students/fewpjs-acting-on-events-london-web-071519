// Your code here
let dodger = document.getElementById('dodger');

//Following is a working generalised method (tests wont pass)
// function moveDodger(direction) {
//     let moveNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(moveNumbers, 10);

//     if (direction === "moveleft") {
//         if (left > 0) {
//             dodger.style.left = `${left - 1}px`;
//         }
//     }
//     else {
//         dodger.style.left = `${left + 1}px`;
//     }

// }

function moveDodgerLeft() {
	let leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left - 1}px`;
	}
}

function moveDodgerRight() {
	let leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);

	if (left < 360) {
		dodger.style.left = `${left + 1}px`;
	}
}

function moveDodgerUp() {
	let UpNumbers = dodger.style.bottom.replace('px', '');
	let top = parseInt(UpNumbers, 10);

	dodger.style.bottom = `${top + 1}px`;
}

document.addEventListener('keydown', function(e) {
	if (e.key === 'ArrowLeft') {
		moveDodgerLeft();
	}
});

document.addEventListener('keydown', function(e) {
	if (e.key === 'ArrowRight') {
		moveDodgerRight();
	}
});

document.addEventListener('keydown', function(e) {
	if (e.key === 'ArrowUp') {
		moveDodgerUp();
	}
});
