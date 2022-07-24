// Init
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Data
const data = []

// Main
rl.on('line', inputData => {
  data.push(inputData.split(''))
}).on('close', () => {
  printAnswer(getAnswer(data))
})

// Methods
function getAnswer([a, b]) {
  let counter = 0

  b.forEach(item => {
    if (a.includes(item)) {
      counter++
    }
  })

  return counter
}

function printAnswer(answer) {
  process.stdout.write(answer.toString())
  process.exit(0)
}
