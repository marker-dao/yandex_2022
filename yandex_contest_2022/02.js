function makeOperation ({ a, operation, b }) {
  switch (operation) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      if (b === 0) {
        return a
      }
      return a / b
    default:
      return a
  }
}

function calc(first, ...rest) {
  const args = [...arguments]

  return args.reduce((acc, item, index) => {
    if (/[0-9]/.test(item)) {
      return makeOperation({
        a: acc,
        operation: args[index - 1] ?? '+',
        b: Number(item),
      })
    }

    return acc
  }, 0).toString()
}

console.log(calc('99999999999999999999999999999999999999', '+', '33333333339', '*', '13'))

// module.exports = { calc }