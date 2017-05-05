const test = require('tape')

const ClientId = require('../')

test('client-id', function (t) {
  t.ok(ClientId, 'module is require-able')
  t.end()
})

test('first 20 client ids', t => {
  const expected = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', 'a',
    'b', 'c', 'd', 'e', 'f',
    '10', '11', '12', '13', '14'
  ]
  var actual = []
  ClientId.initialValue = '0'
  ClientId.previous = null
  for (var i = 0; i < 20; i++) {
    actual.push(ClientId())
  }
  t.deepEqual(actual, expected, 'actual is expected')
  t.end()
})

test('0xfffffff rollover', t => {
  const expected = [
    'fffffffe',
    'ffffffff',
    '100000000',
    '100000001'
  ]
  var actual = []
  ClientId.initialValue = 'fffffffd'
  ClientId.previous = null
  actual.push(ClientId())
  actual.push(ClientId())
  actual.push(ClientId())
  actual.push(ClientId())
  t.deepEqual(actual, expected, 'actual is expected')
  t.end()
})

test('larger than Number.MAX_SAFE_INTEGER', t => {
  const expected = [
    '1ffffffffffffe',
    '1fffffffffffff',
    '20000000000000',
    '20000000000001'
  ]
  var actual = []
  ClientId.initialValue = '1ffffffffffffd'
  ClientId.previous = null
  actual.push(ClientId())
  actual.push(ClientId())
  actual.push(ClientId())
  actual.push(ClientId())
  t.deepEqual(actual, expected, 'actual is expected')
  t.end()
})
