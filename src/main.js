// NOTE: not using deprecated `keyCode` attribute
const keySequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let sequenceStep = 0;

function callbackFunc() {

}

// TODO: as func to pass to `keydown` listener
document.addEventListener("keydown", function (e) {
  console.log(e)
  if (keySequence[sequenceStep] === e.key) {
    sequenceStep += 1;

    if (sequenceStep === keySequence.length) {
      sequenceStep = 0;
      callbackFunc();
    }
  } else {
    sequenceStep = 0;
  }
});