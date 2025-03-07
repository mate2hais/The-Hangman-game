
const wordsArray = ["tastatura", "ibric", "vant", "floare", "carte", "aragaz", "pistol", "pisica" ,"acasa", "vaza", "pahar", "amar"];
let totalLives = 7;

//aFISEZ CATE VIETI MAI RAMAN
document.getElementById('lives').innerText = "Aveti " + totalLives + " vieti ramase";

let variables = [];

//AFISEZ CATE UN CUVANT RANDOM
function chooseWord() { // Prima functie
  let posWord = Math.floor(Math.random() * wordsArray.length) ;
  word = wordsArray[posWord];
  console.log(posWord + " <--> " + word) ;
  document.getElementById('word').innerText = "" ;
  document.getElementById('wordLength').innerText = "Cuvantul dumneavoastra contine " + word.length + " litere";
  for (var i = 0; i < word.length; ++i) {
    variables[i] =  "|_|";
  }
  for (var i = 0; i < word.length; ++i) {
    document.getElementById('array').innerHTML += variables[i];
    console.log(variables[i] + "<--")
  }
}

// ACTIUNEA BUTONULUI CAND BAG LITERA DE LA TASTATURA
const button = document.getElementById('button').addEventListener("click", verify);
function verify(){
  inputLetter = document.getElementById('myText').value; // litera din input 
  document.getElementById('displayInput').innerHTML  += inputLetter += " "; // o afisam pe pagina
  change();
  display();
}

function change() {
  let flag = 1;
  for (let z = 0; z < word.length; ++z) {
    document.getElementById('array').textContent = '';
    if (word[z] === document.getElementById('myText').value  && variables[z] != word[z]) { 
     variables[z] =  document.getElementById('myText').value;
      flag = 0;
    } 
  }
if (flag == 1) {
  --totalLives;
  document.getElementById('lives').innerText = "Aveti " + totalLives + " vieti ramase";
}
result();
}

function result() {
  let flag2 = 1; 
  for (let i = 0; i < word.length; ++i) {
    if (variables[i] != word[i]) {
      flag2 = 0;
    }
  }
  if (flag2 == 1) {
    console.log("Ai castigat !!!")
    document.getElementById('word').innerText = "Felicitari!! Ai castigat jocul!";
  } else if (flag2 == 0 && totalLives == 0) {
    document.getElementById('word').innerText = "Din pacate ai pierdut! Mai incearca!";
  }
}

function display(){
 for (var i = 0; i < word.length; ++i) {
 document.getElementById('array').innerText  +=  variables[i] ;
 }
}

/* trebuie sa mai lucrez la aceasta functionalitate
const resetBtn = document.getElementById('resetButton').addEventListener("click", reset);
function reset(){
  inputLetter = document.getElementById('myText').value; // litera din input 
  document.getElementById('displayInput').innerHTML  += inputLetter += " "; // o afisam pe pagina
  change();
  display();
}*/
