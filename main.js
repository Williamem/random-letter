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


//alphabet
const alphabet = createAlphabet();


//entrance animations
const entranceAnimations = [
  "backInDown",
  "backInLeft",
  "backInRight",
  "backInUp",
  "bounceIn",
  "bounceInDown",
  "bounceInUp",
  "bounceInLeft",
  "bounceInRight",
  "flipInX",
  "flipInY",
  "lightSpeedInRight",
  "lightSpeedInLeft",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "jackInTheBox",
  "rollIn"
];

//exit animations
const exitAnimations = [
  "backOutDown",
  "backOutLeft",
  "backOutRight",
  "backOutUp",
  "bounceOut",
  "bounceOutDown",
  "bounceOutUp",
  "bounceOutLeft",
  "bounceOutRight",
  "flipOutX",
  "flipOutY",
  "lightSpeedOutRight",
  "lightSpeedOutLeft",
  "rotateOut",
  "rotateOutDownLeft",
  "rotateOutDownRight",
  "rotateOutUpLeft",
  "rotateOutUpRight",
  "hinge",
  "rollOut"
];


//easily make the arrays for the effects
/* const strToArr = () => {
  //entrances
  //let str = 'backInDown backInLeft backInRight backInUp bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight flipInX flipInY lightSpeedInRight lightSpeedInLeft rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight jackInTheBox rollIn';
  //exits
  let str = 'backOutDown backOutLeft backOutRight backOutUp bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight flipOutX flipOutY lightSpeedOutRight lightSpeedOutLeft rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollOut';
  let arr = str.split(' ');
  console.log(arr);
};
strToArr(); */


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
    //new values for letter, color and entrance animation
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
