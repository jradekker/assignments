
let username = document.getElementById('username');


const names = ["Anne", "Jim", "Monique", "Hanneke", "Peter", "Mathilde", "Bastiaan", "Maurits", "Machteld"];
names.length;
names[names.length];
names[names.length - 1];


function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const RandomNumber = getRandomNumber(0, names.length); // => this const will contain the random number

function showMyfriend()
{
 console.log([RandomNumber]);
console.log(username);
}
