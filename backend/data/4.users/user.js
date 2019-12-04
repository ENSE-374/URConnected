const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

const users = [
  {
    _id: new ObjectID('aaa1c2c35ef7a4e97b5e9955'),
    name: 'Salim Bakri',
    email: 'sbakri@uregina.ca',
    password: '$2a$05$KfVSJD4jJsm71bGpSsMy0u7jGuJR0zliAmsS/rmFuMaDWKHw53J1m',
    verified: true,
    verification: '3d005048-f869-4164-ab62-973b311c1c16',
    loginAttempts: 0,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('aaa2c2c35ef7a4e97b5e9955'),
    name: 'Allan Wambold',
    email: 'awambold@uregina.ca',
    password: '$2a$05$oyozr91Echiaa5./cJXTu.hj1Dj7xRfoYoIediAAi7YJlG.vBcjGS',
    verified: true,
    verification: '3d005048-f869-4164-ab62-973b311c1c17',
    loginAttempts: 0,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('aaa3c2c35ef7a4e97b5e9955'),
    name: 'Carter Brezinski',
    email: 'cjb543@uregina.ca',
    password: '$2a$05$YGcMioVhsn0G5zPDIQqljOdtz1essdOxId4MDqMxGqGtTcM.HFprq',
    verified: true,
    verification: '3d005048-f869-4164-ab62-973b311c1c18',
    loginAttempts: 0,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]

module.exports = users
