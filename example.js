const ClientId = require('./')

function loop () {
  process.stdout.write(ClientId() + ' ')
  setImmediate(loop)
}

loop()
