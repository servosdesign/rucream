const submissionText = document.getElementById('submition')
const counterButton = document.getElementById('counter')
const restartButton = document.getElementById('restart')
const previousButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

const increment = 'increment'
const decrement = 'decrement'

/* Fisher–Yates shuffle */
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const randomizeData = () => {
  /* Questions */
  for (let i = 0; i < questionBank.length; i++) {
    randomizedQuestionBank.push(questionBank[i])
    shuffle(randomizedQuestionBank)
  }
  randomizedQuestionBank = randomizedQuestionBank.slice(0, questionAmount)

  /* Options */
  for (let i = 0; i < randomizedQuestionBank.length; i++) {
    randomizedOptionBank.push(randomizedQuestionBank[i].options)
    shuffle(randomizedOptionBank[i])
  }
}

const displayQuestions = (counter) => {
  toggleButtons(counter)
  let questionDisplay = ''
  let optionsDisplay = ''
  let optionDisplayArray = []
  optionDisplayArray = (randomizedOptionBank[counter - 1])

  questionDisplay += `<h3 class='questionOption'>${randomizedQuestionBank[counter - 1].question}</h3>`

  for (let i = 0; i < optionDisplayArray.length; i++) {
    optionsDisplay +=
      `<input type='radio' id='radio${i}' name='quiz_questions${count}' value='${optionDisplayArray[i].correct}'>` +
      `<label>${optionDisplayArray[i].text}</label>`
  }
  displayOptions(questionDisplay, optionsDisplay)
}