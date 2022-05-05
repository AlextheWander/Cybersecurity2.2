//Header Menu active/active 

const bars = document.getElementById('bars'); // id'et bars til min const variabel "bars"
const mobileMenu = document.getElementById('mobileMenu'); // id'et mobileMenu til const varibal mobilemenu

bars.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');     /*addEventlistener i dette tilfælde "click" på const "bars" til Fuctionen
                                                på "mobileMenu" toggle som viser/fjerner active classen som er designet i css'en  */
});

// Spørgsmål 1
// https://www.freecodecamp.org/news/multiple-choice-quiz-template/ Quizz
// Functionen qizz viser resultatet til brugeren med farve omkring plus tekst, alt efter om det er rigtigt eller forkert svar.


const element = document.getElementById("btn");
const element1 = document.getElementById("btn2");
const element2 = document.getElementById("btn3");
const element3 = document.getElementById("btn4");


element.addEventListener("click", function () {
  if (document.getElementById('option-1').checked); { //input
    document.getElementById('block-1').style.border = '3px solid limegreen'; //div
    document.getElementById('result-1').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>'; //Span
  }
  if (document.getElementById('option-2').checked) {
    document.getElementById('block-2').style.border = '3px solid red';
    document.getElementById('result-2').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>'; //Span
    document.getElementById('block-1').style.border = '3px solid limegreen'; //div
    document.getElementById('result-1').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>'; //Span
  }
  if (document.getElementById('option-3').checked) { //input
    document.getElementById('block-3').style.border = '3px solid red'; //div
    document.getElementById('result-3').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>'; //Span
    document.getElementById('block-1').style.border = '3px solid limegreen'; //div
    document.getElementById('result-1').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>'; //Span

  }
  if (document.getElementById('option-4').checked) { //input
    document.getElementById('block-4').style.border = '3px solid red'; //div
    document.getElementById('result-4').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>'; //Span
    document.getElementById('block-1').style.border = '3px solid limegreen'; //div
    document.getElementById('result-1').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>'; //Span
  }
});

// Spørgsmål 2

element1.addEventListener("click", function () {
  if (document.getElementById('option-5').checked) {
    document.getElementById('block-5').style.border = '3px solid red';
    document.getElementById('result-5').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-8').style.border = '3px solid limegreen';
    document.getElementById('result-8').style.color = 'limegreen';
    document.getElementById('result-8').innerHTML = '<p class="rigtigsvar2">Helt rigtigt!</p>';

  }
  if (document.getElementById('option-6').checked) {
    document.getElementById('block-6').style.border = '3px solid red';
    document.getElementById('result-6').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-8').style.border = '3px solid limegreen';
    document.getElementById('result-8').style.color = 'limegreen';
    document.getElementById('result-8').innerHTML = '<p class="rigtigsvar2">Helt rigtigt!</p>';
  }
  if (document.getElementById('option-7').checked) {
    document.getElementById('block-7').style.border = '3px solid red';
    document.getElementById('result-7').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-8').style.border = '3px solid limegreen';
    document.getElementById('result-8').style.color = 'limegreen';
    document.getElementById('result-8').innerHTML = '<p class="rigtigsvar2">Helt rigtigt!</p>';
  }
  if (document.getElementById('option-8').checked) {
    document.getElementById('block-8').style.border = '3px solid limegreen';
    document.getElementById('result-8').style.color = 'limegreen';
    document.getElementById('result-8').innerHTML = '<p class="rigtigsvar2">Helt rigtigt!</p>';
  }
});

// Spørgsmål 3


element2.addEventListener("click", function () {
  if (document.getElementById('option-9').checked) {
    document.getElementById('block-9').style.border = '3px solid red';
    document.getElementById('result-9').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-10').style.border = '3px solid limegreen';
    document.getElementById('result-10').style.color = 'limegreen';
    document.getElementById('result-10').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';

  }
  if (document.getElementById('option-10').checked) {
    document.getElementById('block-10').style.border = '3px solid limegreen';
    document.getElementById('result-10').style.color = 'limegreen';
    document.getElementById('result-10').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';

  }
  if (document.getElementById('option-11').checked) {
    document.getElementById('block-11').style.border = '3px solid red';
    document.getElementById('result-11').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-10').style.border = '3px solid limegreen';
    document.getElementById('result-10').style.color = 'limegreen';
    document.getElementById('result-10').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';

  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('block-12').style.border = '3px solid red';
    document.getElementById('result-12').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-10').style.border = '3px solid limegreen';
    document.getElementById('result-10').style.color = 'limegreen';
    document.getElementById('result-10').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';

  }
});

// Spørgsmål 4

element3.addEventListener("click", function () {
  if (document.getElementById('option-13').checked) {
    document.getElementById('block-13').style.border = '3px solid red';
    document.getElementById('result-13').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-15').style.border = '3px solid limegreen';
    document.getElementById('result-15').style.color = 'limegreen';
    document.getElementById('result-15').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('block-14').style.border = '3px solid red';
    document.getElementById('result-14').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-15').style.border = '3px solid limegreen';
    document.getElementById('result-15').style.color = 'limegreen';
    document.getElementById('result-15').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';
  }
  if (document.getElementById('option-15').checked) {
    document.getElementById('block-15').style.border = '3px solid limegreen';
    document.getElementById('result-15').style.color = 'limegreen';
    document.getElementById('result-15').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';

  }
  if (document.getElementById('option-16').checked) {
    document.getElementById('block-16').style.border = '3px solid red';
    document.getElementById('result-16').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    document.getElementById('block-15').style.border = '3px solid limegreen';
    document.getElementById('result-15').style.color = 'limegreen';
    document.getElementById('result-15').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';
  }
});



// Functions til "Fandt du siden nyttig?" knapperne 


const buttonclick1 = document.getElementById('submitInput')
const ja = document.getElementById('ja')
const nej = document.getElementById('nej')

nej.addEventListener("click", function () {
  document.getElementById('hvorforInput').className = "show"; //Giver classen show
  document.getElementById('submitInput').className = "show1"; //Giver classen show1
});

ja.addEventListener("click", function () {
  document.getElementById('tusindTak').className = "show2"; //giver classen show2 på functionen onbuttonclick1
});

buttonclick1.addEventListener("click", function () {
  document.getElementById('tusindTak').className = "show2"; // Giver tusindtak id classen show2
  document.getElementById('submitInput').outerHTML = ""; //Fjerner submit og hvorfor input onclick 
  document.getElementById('hvorforInput').outerHTML = "";
});

