const bars = document.getElementById('bars'); // id'et bars til min const variabel "bars"
const mobileMenu = document.getElementById('mobileMenu'); // id'et mobileMenu til const varibal mobilemenu

bars.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');     /*addEventlistener i dette tilfælde "click" på const "bars" til Fuctionen
                                                på "mobileMenu" toggle som viser/fjerner active classen som er designet i css'en  */
});


// Spørgsmål 1

// Functionen evaluere svaret og viser resultatet til brugeren alt efter om det er rigtigt eller forkert.
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
    showCorrectAnswer1() //Viser functionen showCorrectAnswer når brugeren svare forkert og giver dem mulighed for at se det rigtige svar. 
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
    document.getElementById('block-5').style.border = '3px solid red'
    document.getElementById('result-5').style.color = 'red'
    document.getElementById('result-5').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer2()
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
    document.getElementById('block-8').style.border = '3px solid limegreen'
    document.getElementById('result-8').style.color = 'limegreen'
    document.getElementById('result-8').innerHTML = 'Helt rigtigt!'
    
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

// Spørgsmål 3

function displayAnswer3() {
  if (document.getElementById('option-9').checked) {
    document.getElementById('block-9').style.border = '3px solid red'
    document.getElementById('result-9').style.color = 'red'
    document.getElementById('result-9').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer3()
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
    showCorrectAnswer3()
  }
  if (document.getElementById('option-12').checked) {
    document.getElementById('block-12').style.border = '3px solid red'
    document.getElementById('result-12').style.color = 'red'
    document.getElementById('result-12').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer3()
  }
}

// functionen viser linket det viser det rigtige svar ved forkert svar
function showCorrectAnswer3() {
  let showAnswer3 = document.createElement('p')
  showAnswer3.innerHTML = 'Vis mig det rigtige svar' // Nedenstående er innerstyling i javascript på elementet p^
  showAnswer3.style.fontSize = '19px'
  showAnswer3.style.fontFamily = 'poppins, sans-serif'
  showAnswer3.style.color = 'black'
  showAnswer3.style.display = 'flex'
  showAnswer3.style.justifyContent = 'center'
  showAnswer3.style.backgroundColor = 'black'
  showAnswer3.style.color = 'white'
  showAnswer3.style.marginLeft = '1rem'
  showAnswer3.style.marginRight = '1rem'
  showAnswer3.style.padding = '10px'
  document.getElementById('showanswer3').appendChild(showAnswer3)
  showAnswer3.addEventListener('click', () => {
    document.getElementById('block-10').style.border = '3px solid limegreen'
    document.getElementById('result-10').style.color = 'limegreen'
    document.getElementById('result-10').innerHTML = 'Helt rigtigt!'
    document.getElementById('showanswer3').removeChild(showAnswer3)
  })
}

// Spørgsmål 4

function displayAnswer4() {
  if (document.getElementById('option-13').checked) {
    document.getElementById('block-13').style.border = '3px solid red'
    document.getElementById('result-13').style.color = 'red'
    document.getElementById('result-13').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer4()
  }
  if (document.getElementById('option-14').checked) {
    document.getElementById('block-14').style.border = '3px solid red'
    document.getElementById('result-14').style.color = 'red'
    document.getElementById('result-14').innerHTML = 'Desværre, det er forkert!'
    showCorrectAnswer4()
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
    showCorrectAnswer4()
  }
}
// functionen viser linket det viser det rigtige svar ved forkert svar
function showCorrectAnswer4() {
  let showAnswer4 = document.createElement('p')
  showAnswer4.innerHTML = 'Vis mig det rigtige svar' // Nedenstående er innerstyling i javascript på elementet p^
  showAnswer4.style.fontSize = '19px'
  showAnswer4.style.fontFamily = 'poppins, sans-serif'
  showAnswer4.style.color = 'black'
  showAnswer4.style.display = 'flex'
  showAnswer4.style.justifyContent = 'center'
  showAnswer4.style.backgroundColor = 'black'
  showAnswer4.style.color = 'white'
  showAnswer4.style.marginLeft = '1rem'
  showAnswer4.style.marginRight = '1rem'
  showAnswer4.style.padding = '10px'
  document.getElementById('showanswer4').appendChild(showAnswer4)
  showAnswer4.addEventListener('click', () => {
    document.getElementById('block-15').style.border = '3px solid limegreen'
    document.getElementById('result-15').style.color = 'limegreen'
    document.getElementById('result-15').innerHTML = 'Helt rigtigt!'
    document.getElementById('showanswer4').removeChild(showAnswer4)
  })
}


