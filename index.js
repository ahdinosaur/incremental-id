module.exports = IncrementalId
module.exports.initialValue = '0'
module.exports.previous

function IncrementalId () {
  var previous = module.exports.previous
  if (previous == null) {
    module.exports.previous = previous = toWords(module.exports.initialValue)
  }
  previous = module.exports.previous = add(previous, 1)
  return toString(previous)
}

function add (words, value) {
  words = words.slice()
  var carry = value
  for (var i = words.length - 1; i !== -1; i--) {
    words[i] += carry
    if (words[i] > 0xffffffff) {
      carry = Math.floor(words[i] / Math.pow(2, 32))
      words[i] = words[i] & 0xffffffff
    } else {
      carry = 0
    }
  }
  if (carry !== 0) {
    words.unshift(carry)
  }
  return words
}

function toWords (string) {
  var padding = 8 - (string.length & 0x7)
  if (padding !== 8) {
    string = '00000000'.substring(0, padding) + string
  }
  return string.match(/(.{1,8})/g).map(function (word) {
    return parseInt(word, 16)
  })
}

function toString (words) {
  var string = [words[0].toString(16)]
  for (var i = 1, I = words.length; i < I; i++) {
    string.push(('00000000000' + words[i].toString(16)).substr(-8))
  }
  return string.join('')
}
