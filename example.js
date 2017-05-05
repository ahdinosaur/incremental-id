const IncrementalId = require('./')

function loop () {
  process.stdout.write(IncrementalId() + ' ')
  setImmediate(loop)
}

loop()
