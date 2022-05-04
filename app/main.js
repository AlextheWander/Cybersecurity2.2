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

function quizzSvar1() {
  if (document.getElementById('option-1').checked); { //input
    document.getElementById('block-1').style.border = '3px solid limegreen'; //div
    document.getElementById('result-1').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>'; //Span
  }
  if (document.getElementById('option-2').checked) { //input<p class="rigtigsvar">Helt rigtigt!</p>.getElementById('block-2').style.border = '3px solid red' //div
    document.getElementById('block-2').style.border = '3px solid red';
    document.getElementById('result-2').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>'; //Span
    visDetRigtigeSvar1()  //Viser functionen visDetRigtigeSvar1 (nedenfor) når brugeren svare forkert og giver dem mulighed for at se det rigtige svar. 
  }  
  if (document.getElementById('option-3').checked) { //input
    document.getElementById('block-3').style.border = '3px solid red'; //div
    document.getElementById('result-3').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>'; //Span
    visDetRigtigeSvar1();
  }
  if (document.getElementById('option-4').checked) { //input
    document.getElementById('block-4').style.border = '3px solid red'; //div
    document.getElementById('result-4').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>'; //Span
    visDetRigtigeSvar1();

  }
}

// functionen visDetRigtigeSvar viser knappen til det rigtige svar når der svares forkert 
function visDetRigtigeSvar1() {
  let visSvar1 = document.createElement('p');// laver elementet (p) 
  visSvar1.innerHTML = '<p class="pp">Vis mig det rigtige svar</p>';
  document.getElementById('vissvar1').appendChild(visSvar1);
  visSvar1.addEventListener('click', () => { // addder en EventListener (click)
    document.getElementById('block-1').style.border = '3px solid limegreen'; //div
    document.getElementById('result-1').innerHTML = '<p class="tjekrigtigsvar">Helt rigtigt!</p>'; //Span
    document.getElementById('vissvar1').removeChild(visSvar1); // The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.  Så når man klikker får man det rigtige svar vist og removeChild fjerner knappen igen.
  });  //magen til removechild før fuctionen så remove. ()
}

// Spørgsmål 2

function quizzSvar2() {
  if (document.getElementById('option-5').checked) {
    document.getElementById('block-5').style.border = '3px solid red';
    document.getElementById('result-5').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar2();
  }
  if (document.getElementById('option-6').checked) {
    document.getElementById('block-6').style.border = '3px solid red';
    document.getElementById('result-6').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar2();
  }
  if (document.getElementById('option-7').checked) {
    document.getElementById('block-7').style.border = '3px solid red';
    document.getElementById('result-7').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar2();
  }
  if (document.getElementById('option-8').checked) {
    document.getElementById('block-8').style.border = '3px solid limegreen';
    document.getElementById('result-8').style.color = 'limegreen';
    document.getElementById('result-8').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';

  }
}

// functionen viser linket det viser det rigtige svar ved forkert svar
function visDetRigtigeSvar2() {
  let visSvar2 = document.createElement('p');
  visSvar2.innerHTML = '<p class="pp">Vis mig det rigtige svar</p>';
  document.getElementById('vissvar2').appendChild(visSvar2);
  visSvar2.addEventListener('click', () => {
    document.getElementById('block-8').style.border = '3px solid limegreen';
    document.getElementById('result-8').innerHTML = '<p class="tjekrigtigsvar">Helt rigtigt!</p>';
    document.getElementById('vissvar2').removeChild(visSvar2);
  });
}

// Spørgsmål 3

function quizzSvar3() {
  if (document.getElementById('option-9').checked) {
    document.getElementById('block-9').style.border = '3px solid red';
    document.getElementById('result-9').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar3();
  }
  if (document.getElementById('option-10').checked) {
    document.getElementById('block-10').style.border = '3px solid limegreen';
    document.getElementById('result-10').style.color = 'limegreen';
    document.getElementById('result-10').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';

  }
  if (document.getElementById('option-11').checked) {
    document.getElementById('block-11').style.border = '3px solid red';
    document.getElementById('result-11').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar3();
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('block-12').style.border = '3px solid red';
    document.getElementById('result-12').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar3();
  }
}

// functionen viser linket det viser det rigtige svar ved forkert svar
function visDetRigtigeSvar3() {
  let visSvar3 = document.createElement('p');
  visSvar3.innerHTML = '<p class="pp">Vis mig det rigtige svar</p>';
  document.getElementById('vissvar3').appendChild(visSvar3);
  visSvar3.addEventListener('click', () => {
    document.getElementById('block-10').style.border = '3px solid limegreen';
    document.getElementById('result-10').innerHTML = '<p class="tjekrigtigsvar">Helt rigtigt!</p>';
    document.getElementById('vissvar3').removeChild(visSvar3);
  });
}

// Spørgsmål 4

function quizzSvar4() {
  if (document.getElementById('option-13').checked) {
    document.getElementById('block-13').style.border = '3px solid red';
    document.getElementById('result-13').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar4();
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('block-14').style.border = '3px solid red';
    document.getElementById('result-14').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar4();
  }
  if (document.getElementById('option-15').checked) {
    document.getElementById('block-15').style.border = '3px solid limegreen';
    document.getElementById('result-15').style.color = 'limegreen';
    document.getElementById('result-15').innerHTML = '<p class="rigtigsvar">Helt rigtigt!</p>';

  }
  if (document.getElementById('option-16').checked) {
    document.getElementById('block-16').style.border = '3px solid red';
    document.getElementById('result-16').innerHTML = '<p class="forkertsvar">Desværre, det er forkert!</p>';
    visDetRigtigeSvar4();
  }
}
// functionen viser linket det viser det rigtige svar ved forkert svar
function visDetRigtigeSvar4() {
  let visSvar4 = document.createElement('p');
  visSvar4.innerHTML = '<p class="pp">Vis mig det rigtige svar</p>';
  document.getElementById('vissvar4').appendChild(visSvar4);
  visSvar4.addEventListener('click', () => {
    document.getElementById('block-15').style.border = '3px solid limegreen';
    document.getElementById('result-15').innerHTML = '<p class="tjekrigtigsvar">Helt rigtigt!</p>';
    document.getElementById('vissvar4').removeChild(visSvar4);
  });
}


// Functions til "Fandt du siden nyttig?" knapperne 

function onButtonClick() {
  document.getElementById('hvorforInput').className = "show"; //Giver classen show
  document.getElementById('submitInput').className = "show1"; //Giver classen show1
}

function onButtonClick1() {
  document.getElementById('tusindTak').className = "show2"; //giver classen show2 på functionen onbuttonclick1
}

function onButtonClick2() {
  document.getElementById('tusindTak').className = "show2"; // Giver tusindtak id classen show2
  document.getElementById('submitInput').outerHTML = ""; //Fjerner submit og hvorfor input onclick 
  document.getElementById('hvorforInput').outerHTML = "";
}
