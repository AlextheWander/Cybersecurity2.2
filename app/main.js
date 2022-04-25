const bars = document.getElementById('bars'); // id'et bars til min const variabel "bars"
const mobileMenu = document.getElementById('mobileMenu'); // id'et mobileMenu til const varibal mobilemenu

bars.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');     /*addEventlistener i dette tilfælde "click" på const "bars" til Fuctionen
                                                på "mobileMenu" toggle som viser/fjerner active classen som er designet i css'en  */
});


// Spørgsmål 1

  // Functionen evaluere svaret og viser resultatet til brugeren alt efter om det er rigtigt eller forkert
  function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '3px solid red'
      document.getElementById('result-12').style.color = 'red'
      document.getElementById('result-12').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-13').checked) {
      document.getElementById('block-13').style.border = '3px solid red'
      document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-13').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-14').checked) {
      document.getElementById('block-14').style.border = '3px solid red'
      document.getElementById('result-14').style.color = 'red'
      document.getElementById('result-14').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
  }
  // functionen viser linket det viser det rigtige svar ved forkert svar
  function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer' // Nedenstående er innerstyling i javascript på elementet p^
    showAnswer1.style.fontSize = '1.75rem'
    showAnswer1.style.color = 'white'
    showAnswer1.style.display = 'flex'
    showAnswer1.style.justifyContent = 'center'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
      document.getElementById('showanswer1').removeChild(showAnswer1)
    })
  }

  // Spørgsmål 2

  function displayAnswer2() {
    if (document.getElementById('option-15').checked) {
      document.getElementById('block-15').style.border = '3px solid limegreen'
      document.getElementById('result-15').style.color = 'limegreen'
      document.getElementById('result-15').innerHTML = 'Incorrect!'
    }
    if (document.getElementById('option-16').checked) {
      document.getElementById('block-16').style.border = '3px solid red'
      document.getElementById('result-16').style.color = 'red'
      document.getElementById('result-16').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-17').checked) {
      document.getElementById('block-17').style.border = '3px solid red'
      document.getElementById('result-17').style.color = 'red'
      document.getElementById('result-17').innerHTML = 'Incorrect!'
      showCorrectAnswer2()
    }
    if (document.getElementById('option-18').checked) {
      document.getElementById('block-18').style.border = '3px solid red'
      document.getElementById('result-18').style.color = 'red'
      document.getElementById('result-18').innerHTML = 'Correct!'
      showCorrectAnswer2()
    }
  }
  // functionen viser linket det viser det rigtige svar ved forkert svar
  function showCorrectAnswer2() {
    let showAnswer2 = document.createElement('p')
    showAnswer2.innerHTML = 'Show Corrent Answer' // Nedenstående er innerstyling i javascript på elementet p^
    showAnswer2.style.fontSize = '1.75rem'
    showAnswer2.style.color = 'white'
    showAnswer2.style.display = 'flex'
    showAnswer2.style.justifyContent = 'center'
    document.getElementById('showanswer2').appendChild(showAnswer2)
    showAnswer2.addEventListener('click', () => {
      document.getElementById('block-18').style.border = '3px solid limegreen'
      document.getElementById('result-18').style.color = 'limegreen'
      document.getElementById('result-18').innerHTML = 'Correct!'
      document.getElementById('showanswer2').removeChild(showAnswer2)
    })
  }