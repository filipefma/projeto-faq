const icon1 = document.querySelector('#question1 img')
const answer1 = document.querySelector('#answer1')
answer1.style.display = 'none'

const icon2 = document.querySelector('#question2 img')
const answer2 = document.querySelector('#answer2')
answer2.style.display = 'none'

const icon3 = document.querySelector('#question3 img')
const answer3 = document.querySelector('#answer3')
answer3.style.display = 'none'

const icon4 = document.querySelector('#question4 img')
const answer4 = document.querySelector('#answer4')
answer4.style.display = 'none'

function answerOne() {

  if(answer1.style.display == 'none') {
    answer1.style.display = 'block'
    icon1.setAttribute('src', './assets/images/icon-minus.svg')
  } else {
    answer1.style.display = 'none'
    icon1.setAttribute('src', './assets/images/icon-plus.svg')
  }
}

function answerTwo() {

  if(answer2.style.display == 'none') {
    answer2.style.display = 'block'
    icon2.setAttribute('src', './assets/images/icon-minus.svg')
  } else {
    answer2.style.display = 'none'
    icon2.setAttribute('src', './assets/images/icon-plus.svg')
  }
}

function answerThree() {
  
  if(answer3.style.display == 'none') {
    answer3.style.display = 'block'
    icon3.setAttribute('src', './assets/images/icon-minus.svg')
  } else {
    answer3.style.display = 'none'
    icon3.setAttribute('src', './assets/images/icon-plus.svg')
  }
}

function answerFour() {
  
  if(answer4.style.display == 'none') {
    answer4.style.display = 'block'
    icon4.setAttribute('src', './assets/images/icon-minus.svg')
  } else {
    answer4.style.display = 'none'
    icon4.setAttribute('src', './assets/images/icon-plus.svg')
  }
}