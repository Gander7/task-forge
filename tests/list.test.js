const add = require('../src/cmds/add')
const done = require('../src/cmds/done')
const list = require('../src/cmds/list')
const Data = require('../src/data/db')

const output = {
  log: [],
  error: [],
}

const mockedLog = (info) => output.log.push(info)
const mockedError = (info) => output.error.push(info)

beforeEach(() => {
  output.log = []
  output.error = []
  console.log = mockedLog
  console.error = mockedError
})

describe('List Command', () => {
  test('basic list', () => {
    const db = new Data()
    add(['test', 'add', '1'], db)
    add(['test', 'add', '2'], db)
    list(undefined, db)
    expect(output.log.length).toEqual(3)
    expect(output.log[2]).toEqual(expect.stringContaining('test add 1'))
    expect(output.log[2]).toEqual(expect.stringContaining('test add 2'))
  })

  test('Nothing to output', () => {
    const db = new Data()

    list(undefined, db)

    expect(output.log.length).toEqual(1)
    expect(output.log[0]).toEqual('No outstanding tasks found.')
  })

  test('list complete tasks', () => {
    const db = new Data()
    add(['test', 'add', '1'], db)
    add(['test', 'add', '2'], db)
    add(['test', 'add', '3'], db)
    done(1, db)
    done(3, db)
    list({ d: true }, db)

    expect(output.log.length).toEqual(6)
    expect(output.log[5]).toEqual(expect.stringContaining('test add 1'))
    expect(output.log[5]).toEqual(expect.stringContaining('test add 3'))
  })

  test('list tasks error', () => {
    const db = new Data()
    jest.spyOn(db, 'getAll').mockImplementation(() => {})

    list({}, db)

    expect(output.log.length).toEqual(0)
  })
})
