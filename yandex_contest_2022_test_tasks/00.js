// Init
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


// Main
rl.on('line', inputData => {
  const data = inputData.split(' ').map(item => Number(item))

  printAnswer(getAnswer(data))
})

// Methods
function getAnswer(data) {
  const [a, b] = data
  
  return a + b
}

function printAnswer(answer) {
  process.stdout.write(answer.toString())
  process.exit(0)
}
