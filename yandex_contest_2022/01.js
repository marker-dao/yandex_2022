// Methods
function f (mapString) {
  const arr = mapString.split(/\r\n|\r|\n/)
  const mapHoles = []
  const mapLetters = []

  arr.forEach((str, index) => {
    const holes = getHole(str, index)
    const letters = getLetters(str, index)
    
    if (holes) {
      mapHoles.push(...holes)
    }
    
    if (letters) {
      mapLetters.push(...letters)
    }
  })

  return getMaxPathLength(mapLetters, mapHoles)
}

function getHole (str, index) {
  const els = []

  str.split('').forEach((el, i) => {
    if (/[0-9]/.test(el)) {
      els.push({
        x: i,
        y: index,
        el: Number(el),
      })
    }
  })

  return els.length ? els : null
}

function getLetters (str, index) {
  const els = []

  str.split('').forEach((el, i) => {
    if (/[A-Za-z]/.test(el)) {
      els.push({
        x: i,
        y: index,
        el,
      })
    }
  })

  return els.length ? els : null
}

function getMaxPathLength (letters, holes) {
  let max = 0
  
  letters.forEach(letter => {
    let minLength = Infinity

    holes.forEach(hole => {
      const x = Math.abs(hole.x - letter.x)
      const y = Math.abs(hole.y - letter.y)

      const length = x + y

      if (length < minLength) {
        minLength = length
      }
    })

    max = minLength > max ? minLength : max
  })

  return max + 1
}

module.exports = f
