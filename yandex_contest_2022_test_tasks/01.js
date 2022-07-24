// Init
const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')

// Main
function main (inputData) {
  const data = inputData.split(' ').map(item => Number(item))

  sendAnswer(getAnswer(data))
}

// Methods
function getAnswer(data) {
  const [a, b] = data
  
  return a + b
}

function sendAnswer(answer) {
  fs.writeFileSync('output.txt', answer.toString(), {
    encoding: 'utf8',
  })
}

main(input)
