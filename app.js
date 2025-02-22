/*-------------------------------- Constants --------------------------------*/

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.button')

/*-------------------------------- Variables --------------------------------*/

let firstNumber = ''
let operator = null
let newNumber = true

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.textContent

    if (event.target.classList.contains('number')) {
      handleNumber(value)
    } else if (event.target.classList.contains('operator')) {
      handleOperator(value)
    } else if (event.target.classList.contains('equals')) {
      handleEquals()
    } else if (event.target.classList.contains('clear')) {
      handleClear()
    }
  })
})

/*-------------------------------- Functions --------------------------------*/

const updateDisplay = (value) => {
  display.textContent = value
}

const handleNumber = (value) => {
  if (newNumber) {
    display.textContent = value
    newNumber = false
  } else {
    display.textContent += value
  }
}

const handleClear = () => {
  display.textContent = '0'
  firstNumber = ''
  operator = null
  newNumber = true
}

const handleOperator = (value) => {
  if (operator && !newNumber) {
    handleEquals()
  }

  firstNumber = display.textContent
  operator = value
  newNumber = true
}

const handleEquals = () => {
  if (!operator || newNumber) return
  const secondNumber = display.textContent

  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b === 0 ? 'Error' : a / b)
  }

  const result = operations[operator](
    parseFloat(firstNumber),
    parseFloat(secondNumber)
  )

  display.textContent = result
  firstNumber = result
  operator = null
  newNumber = true
}

updateDisplay('0')
