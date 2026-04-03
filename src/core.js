const keySequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let sequenceStep = 0;

let handleKonami = (e) => (callback) => {
  if (keySequence[sequenceStep] === e.key) {
    sequenceStep += 1;

    if (sequenceStep === keySequence.length) {
      sequenceStep = 0;
      callback();
    }
  } else {
    sequenceStep = 0;
  }
}