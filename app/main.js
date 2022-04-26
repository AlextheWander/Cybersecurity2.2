const bars = document.getElementById('bars'); // id'et bars til min const variabel "bars"
const mobileMenu = document.getElementById('mobileMenu'); // id'et mobileMenu til const varibal mobilemenu

bars.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');     /*addEventlistener i dette tilfælde "click" på const "bars" til Fuctionen
                                                på "mobileMenu" toggle som viser/fjerner active classen som er designet i css'en  */
});


// Spørgsmål 1

// Functionen evaluere svaret og viser resultatet til brugeren alt efter om det er rigtigt eller forkert
function displayAnswer1() {
  if (document.getElementById('option-1').checked) {
    document.getElementById('block-1').style.border = '3px solid limegreen'
    document.getElementById('result-1').style.color = 'limegreen'
    document.getElementById('result-1').innerHTML = 'Helt rigtigt!'
  }
  if (document.getElementById('option-2').checked) {
    document.getElementById('block-2').style.border = '3px solid red'
    document.getElementById('result-2').style.color = 'red'
    document.getElementById('result-2').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer1()
  }
  if (document.getElementById('option-3').checked) {
    document.getElementById('block-3').style.border = '3px solid red'
    document.getElementById('result-3').style.color = 'red'
    document.getElementById('result-3').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer1()
  }
  if (document.getElementById('option-4').checked) {
    document.getElementById('block-4').style.border = '3px solid red'
    document.getElementById('result-4').style.color = 'red'
    document.getElementById('result-4').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer1()
  }
}
// functionen viser linket det viser det rigtige svar ved forkert svar
function showCorrectAnswer1() {
  let showAnswer1 = document.createElement('p')
  showAnswer1.innerHTML = 'Vis mig det rigtige svar' // Nedenstående er innerstyling i javascript på elementet p^
  showAnswer1.style.fontSize = '19px'
  showAnswer1.style.fontFamily = 'poppins, sans-serif'
  showAnswer1.style.color = 'black'
  showAnswer1.style.display = 'flex'
  showAnswer1.style.justifyContent = 'center'
  showAnswer1.style.backgroundColor = 'black'
  showAnswer1.style.color = 'white'
  showAnswer1.style.marginLeft = '1rem'
  showAnswer1.style.marginRight = '1rem'
  showAnswer1.style.padding = '10px'
  document.getElementById('showanswer1').appendChild(showAnswer1)
  showAnswer1.addEventListener('click', () => {
    document.getElementById('block-1').style.border = '3px solid limegreen'
    document.getElementById('result-1').style.color = 'limegreen'
    document.getElementById('result-1').innerHTML = 'Helt rigtigt!'
    document.getElementById('showanswer1').removeChild(showAnswer1)
  })
}

// Spørgsmål 2

function displayAnswer2() {
  if (document.getElementById('option-5').checked) {
    document.getElementById('block-5').style.border = '3px solid limegreen'
    document.getElementById('result-5').style.color = 'limegreen'
    document.getElementById('result-5').innerHTML = 'Desværre, det er forkert!'
  }
  if (document.getElementById('option-6').checked) {
    document.getElementById('block-6').style.border = '3px solid red'
    document.getElementById('result-6').style.color = 'red'
    document.getElementById('result-6').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer2()
  }
  if (document.getElementById('option-7').checked) {
    document.getElementById('block-7').style.border = '3px solid red'
    document.getElementById('result-7').style.color = 'red'
    document.getElementById('result-7').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer2()
  }
  if (document.getElementById('option-8').checked) {
    document.getElementById('block-8').style.border = '3px solid red'
    document.getElementById('result-8').style.color = 'red'
    document.getElementById('result-8').innerHTML = 'Helt rigtigt!'
    showCorrectAnswer2()
  }
}
// functionen viser linket det viser det rigtige svar ved forkert svar
function showCorrectAnswer2() {
  let showAnswer2 = document.createElement('p')
  showAnswer2.innerHTML = 'Vis mig det rigtige svar' // Nedenstående er innerstyling i javascript på elementet p^
  showAnswer2.style.fontSize = '19px'
  showAnswer2.style.fontFamily = 'poppins, sans-serif'
  showAnswer2.style.color = 'black'
  showAnswer2.style.display = 'flex'
  showAnswer2.style.justifyContent = 'center'
  showAnswer2.style.backgroundColor = 'black'
  showAnswer2.style.color = 'white'
  showAnswer2.style.marginLeft = '1rem'
  showAnswer2.style.marginRight = '1rem'
  showAnswer2.style.padding = '10px'
  document.getElementById('showanswer2').appendChild(showAnswer2)
  showAnswer2.addEventListener('click', () => {
    document.getElementById('block-8').style.border = '3px solid limegreen'
    document.getElementById('result-8').style.color = 'limegreen'
    document.getElementById('result-8').innerHTML = 'Helt rigtigt!'
    document.getElementById('showanswer2').removeChild(showAnswer2)
  })
}