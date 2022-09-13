const randomRGB = () => Math.floor(Math.random() * 257);
const randomColor = () => {
  let color =  'rgb(' + randomRGB() + ', ' + randomRGB() + ', ' + randomRGB() + ')';
  return color
}

console.log(randomColor());