//variables
//elements
const letter = document.getElementById('letter');
const letterBox = document.getElementById('letter-box');

// create a random RGB to use in CSS
const randomRGB = () => {
  const randomColor = () => Math.floor(Math.random() * 256);
  return 'rgb(' + randomColor() + ', ' + randomColor() + ', ' + randomColor() + ')';
};

//create alphabet array
const createAlphabet = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  return alpha.map((x) => String.fromCharCode(x));
};

//choose a random letter and letter casing
const randomLetter = num => {
  let numCasing = Math.round(Math.random());
  let numLetter = Math.floor(Math.random() * num);
  let newLetter = alphabet[numLetter];
  if (numCasing === 0) {
    return newLetter;
  } else {
    return newLetter.toLowerCase();
  }
}


//arrays
//alphabet
const alphabet = createAlphabet();
//entrance animations
const entranceAnimations = ['backInDown', 'backInLeft', 'backInRight', 'backInUp'];

//exit animations
const exitAnimations = ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp'];

//chose random animation
const randomAnimation = arr => {
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
};


//function to make all the changes
const makeChanges = () => {
  let exitAnimation = `animate__${randomAnimation(exitAnimations)}`;
  let entranceAnimation = `animate__${randomAnimation(entranceAnimations)}`;
  let newLetter = randomLetter(25);
  let newColor = randomRGB();
  //run animation for exit
  letterBox.classList.add(exitAnimation);
  letterBox.addEventListener('animationend', () => {
    letterBox.classList.remove(exitAnimation);
    letter.textContent = newLetter;
    letterBox.style.backgroundColor = newColor;
    letterBox.classList.add(entranceAnimation);
    // remove the entrance animation
    letterBox.addEventListener('animationend', () => {
      letterBox.classList.remove(entranceAnimation);
    });
  });
};

letterBox.addEventListener('click', makeChanges);

//test
//console.log(randomEntranceAnimation());
//console.log(randomRGB());
//letterBox.style.backgroundColor = 'red';