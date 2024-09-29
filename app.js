/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const numbers = document.querySelectorAll('#number')
const operators = document.querySelectorAll('#operator')

/*-------------------------------- Variables --------------------------------*/

let currentNumber = ''
let previousNumber = ''
let operator = null
let resultDisplayed = false

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText)

    const value = event.target.innerText
    if (event.target.classList.contains('number')) {
      handleNumber(value)
    } else if (event.target.classList.contains('operator')) {
      handleOperator(value)
    } else if (event.target.classList.contains('equals')) {
      handleEvaluation()
    } else if (event.target.classList.contains('clear')) {
      handleClear()
    }
  })
})

calculator.addEventListener('click', (event) => {
  console.log(event.target.innerText)

  if (event.target.classList.contains('number')) {
  }
})

/*-------------------------------- Functions --------------------------------*/
function handleOperator(value) {
  currentNumber += value
  updateDisplay(currentNumber)
}

if (previousNumber !== '') {
  currentNumber = calculate(previousNumber, currentNumber, operator)

  updateDisplay(currentNumber)
}

operator = value
previousNumber = currentNumber
currentNumber = ''

function handleClear() {
  currentNumber = ''
  previousNumber = ''
  operator = null
  updateDisplay('')
}

function updateDisplay(value) {
  displayElement.innerText = value
}

function calculate(num1, num2, operator) {
  const number1 = parseFloat(num1)
  const number2 = parseFloat(num2)

  switch (operator) {
    case '+':
      return (number1 + number2).toString()
    case '-':
      return (number1 - number2).toString()
    case '*':
      return (number1 * number2).toString()
    case '/':
      return number2 === 0 ? 'Error' : (number1 / number2).toString()

    default:
      return ''
  }
}
