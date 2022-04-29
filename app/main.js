//Header Menu active/active 

const bars = document.getElementById('bars'); // id'et bars til min const variabel "bars"
const mobileMenu = document.getElementById('mobileMenu'); // id'et mobileMenu til const varibal mobilemenu

bars.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');     /*addEventlistener i dette tilfælde "click" på const "bars" til Fuctionen
                                                på "mobileMenu" toggle som viser/fjerner active classen som er designet i css'en  */
});



// Spørgsmål 1

// Functionen qizz viser resultatet til brugeren med farve omkring plus tekst, alt efter om det er rigtigt eller forkert svar.
function quizzSvar1() { 
  if (document.getElementById('option-1').checked) { //input
    document.getElementById('block-1').style.border = '3px solid limegreen' //div
    document.getElementById('result-1').style.color = 'limegreen' //Span
    document.getElementById('result-1').innerHTML = 'Helt rigtigt!' //Span
  }
  if (document.getElementById('option-2').checked) { //input
    document.getElementById('block-2').style.border = '3px solid red' //div
    document.getElementById('result-2').style.color = 'red' //Span
    document.getElementById('result-2').innerHTML = 'Desværre, det er forkert!' //Span
    visDetRigtigeSvar1() //Viser functionen visDetRigtigeSvar1 (nedenfor) når brugeren svare forkert og giver dem mulighed for at se det rigtige svar. 
  }
  if (document.getElementById('option-3').checked) { //input
    document.getElementById('block-3').style.border = '3px solid red' //div
    document.getElementById('result-3').style.color = 'red' //Span
    document.getElementById('result-3').innerHTML = 'Desværre, det er forkert!' //Span
    visDetRigtigeSvar1()
  }
  if (document.getElementById('option-4').checked) { //input
    document.getElementById('block-4').style.border = '3px solid red' //div
    document.getElementById('result-4').style.color = 'red' //Span
    document.getElementById('result-4').innerHTML = 'Desværre, det er forkert!' //Span
    visDetRigtigeSvar1()
  }
}
// functionen visDetRigtigeSvar viser knappen til det rigtige svar når der svares forkert 
function visDetRigtigeSvar1() {
  let visSvar1 = document.createElement('p') // laver elementet (p) og giver det navnet showAnswer1
  visSvar1.innerHTML = '<p class="pp">Vis mig det rigtige svar</p>' 
  document.getElementById('vissvar1').appendChild(visSvar1) 
  visSvar1.addEventListener('click', () => { // addder en EventListener (click) til vores showAnswer1 
    document.getElementById('block-1').style.border = '3px solid limegreen' //div
    document.getElementById('result-1').innerHTML = '<p class="prigtigsvar">Helt rigtigt!</p>' //Span
    document.getElementById('vissvar1').removeChild(visSvar1) // Så når man klikker får man det rigtige svar vist og removeChild fjerner knappen igen.
  })  //magen til removechild før fuctionen så remove. ()
}

// Spørgsmål 2

function quizzSvar2() {
  if (document.getElementById('option-5').checked) {
    document.getElementById('block-5').style.border = '3px solid red'
    document.getElementById('result-5').style.color = 'red'
    document.getElementById('result-5').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar2()
  }
  if (document.getElementById('option-6').checked) {
    document.getElementById('block-6').style.border = '3px solid red'
    document.getElementById('result-6').style.color = 'red'
    document.getElementById('result-6').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar2()
  }
  if (document.getElementById('option-7').checked) {
    document.getElementById('block-7').style.border = '3px solid red'
    document.getElementById('result-7').style.color = 'red'
    document.getElementById('result-7').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar2()
  }
  if (document.getElementById('option-8').checked) {
    document.getElementById('block-8').style.border = '3px solid limegreen'
    document.getElementById('result-8').style.color = 'limegreen'
    document.getElementById('result-8').innerHTML = 'Helt rigtigt!'
    
  }
}

// functionen viser linket det viser det rigtige svar ved forkert svar
function visDetRigtigeSvar2() {
  let visSvar2 = document.createElement('p') 
  visSvar2.innerHTML = 'Vis mig det rigtige svar' 
  visSvar2.style.fontSize = '19px'
  visSvar2.style.fontFamily = 'poppins, sans-serif'
  visSvar2.style.color = 'black'
  visSvar2.style.display = 'flex'
  visSvar2.style.justifyContent = 'center'
  visSvar2.style.backgroundColor = 'black'
  visSvar2.style.color = 'white'
  visSvar2.style.marginLeft = '1rem'
  visSvar2.style.marginRight = '1rem'
  visSvar2.style.padding = '10px'
  document.getElementById('vissvar2').appendChild(visSvar2)
  visSvar2.addEventListener('click', () => {
    document.getElementById('block-8').style.border = '3px solid limegreen'
    document.getElementById('result-8').style.color = 'limegreen'
    document.getElementById('result-8').innerHTML = 'Helt rigtigt!'
    document.getElementById('vissvar2').removeChild(visSvar2)
  })
}

// Spørgsmål 3

function quizzSvar3() {
  if (document.getElementById('option-9').checked) {
    document.getElementById('block-9').style.border = '3px solid red'
    document.getElementById('result-9').style.color = 'red'
    document.getElementById('result-9').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar3()
  }
  if (document.getElementById('option-10').checked) {
    document.getElementById('block-10').style.border = '3px solid limegreen'
    document.getElementById('result-10').style.color = 'limegreen'
    document.getElementById('result-10').innerHTML = 'Helt rigtigt!'
    
  }
  if (document.getElementById('option-11').checked) {
    document.getElementById('block-11').style.border = '3px solid red'
    document.getElementById('result-11').style.color = 'red'
    document.getElementById('result-11').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar3()
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('block-12').style.border = '3px solid red'
    document.getElementById('result-12').style.color = 'red'
    document.getElementById('result-12').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar3()
  }
}

// functionen viser linket det viser det rigtige svar ved forkert svar
function visDetRigtigeSvar3() {
  let visSvar3 = document.createElement('p')
  visSvar3.innerHTML = 'Vis mig det rigtige svar' // Nedenstående er innerstyling i javascript på elementet p^
  visSvar3.style.fontSize = '19px'
  visSvar3.style.fontFamily = 'poppins, sans-serif'
  visSvar3.style.color = 'black'
  visSvar3.style.display = 'flex'
  visSvar3.style.justifyContent = 'center'
  visSvar3.style.backgroundColor = 'black'
  visSvar3.style.color = 'white'
  visSvar3.style.marginLeft = '1rem'
  visSvar3.style.marginRight = '1rem'
  visSvar3.style.padding = '10px'
  document.getElementById('vissvar3').appendChild(visSvar3)
  visSvar3.addEventListener('click', () => {
    document.getElementById('block-10').style.border = '3px solid limegreen'
    document.getElementById('result-10').style.color = 'limegreen'
    document.getElementById('result-10').innerHTML = 'Helt rigtigt!'
    document.getElementById('vissvar3').removeChild(visSvar3)
  })
}

// Spørgsmål 4

function quizzSvar4() {
  if (document.getElementById('option-13').checked) {
    document.getElementById('block-13').style.border = '3px solid red'
    document.getElementById('result-13').style.color = 'red'
    document.getElementById('result-13').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar4()
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('block-14').style.border = '3px solid red'
    document.getElementById('result-14').style.color = 'red'
    document.getElementById('result-14').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar4()
  }
  if (document.getElementById('option-15').checked) {
    document.getElementById('block-15').style.border = '3px solid limegreen'
    document.getElementById('result-15').style.color = 'limegreen'
    document.getElementById('result-15').innerHTML = 'Helt rigtigt!'
    
  }
  if (document.getElementById('option-16').checked) {
    document.getElementById('block-16').style.border = '3px solid red'
    document.getElementById('result-16').style.color = 'red'
    document.getElementById('result-16').innerHTML = 'Desværre, det er forkert!'
    visDetRigtigeSvar4()
  }
}
// functionen viser linket det viser det rigtige svar ved forkert svar
function visDetRigtigeSvar4() {
  let visSvar4 = document.createElement('p')
  visSvar4.innerHTML = 'Vis mig det rigtige svar'
  visSvar4.style.fontSize = '19px'
  visSvar4.style.fontFamily = 'poppins, sans-serif'
  visSvar4.style.color = 'black'
  visSvar4.style.display = 'flex'
  visSvar4.style.justifyContent = 'center'
  visSvar4.style.backgroundColor = 'black'
  visSvar4.style.color = 'white'
  visSvar4.style.marginLeft = '1rem'
  visSvar4.style.marginRight = '1rem'
  visSvar4.style.padding = '10px'
  document.getElementById('vissvar4').appendChild(visSvar4)
  visSvar4.addEventListener('click', () => {
    document.getElementById('block-15').style.border = '3px solid limegreen'
    document.getElementById('result-15').style.color = 'limegreen'
    document.getElementById('result-15').innerHTML = 'Helt rigtigt!'
    document.getElementById('vissvar4').removeChild(visSvar4)
  })
}


