// SPDX-License-Identifier: MIT

const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiStep = 0;

let handleKonami = (callback) => (e) => {
  if (konamiSequence[sequenceStep] === e.key) {
    konamiStep += 1;

    if (konamiStep === konamiSequence.length) {
      konamiStep = 0;
      callback();
    }
  } else {
    konamiStep = 0;
  }
}