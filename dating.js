

const names = ["Anne", "Jim", "Monique", "Hanneke", "Peter", "Mathilde", "Bastiaan", "Maurits", "Machteld"];



function showMyfriend() {
  const rNumber = getRandomNumber(0, names.length - 1);
  const answerBox = document.getElementById('answer');
  const name = document.getElementById('username').value;

  answerBox.innerHTML = 'Hello, your name is ' + name + ', you are paired with ' + names[rNumber];
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
