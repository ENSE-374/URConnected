const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

const users = [
  {
    _id: new ObjectID('aaa1c2c35ef7a4e97b5e9955'),
    name: 'Salim Bakri',
    email: 'sbakri@uregina.ca',
    password: 'topSec1',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('aaa2c2c35ef7a4e97b5e9955'),
    name: 'Allan Wambold',
    email: 'awambbold@uregina.ca',
    password: 'topSec2',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('aaa3c2c35ef7a4e97b5e9955'),
    name: 'CarterBrezenski',
    email: 'cbrezenski@uregina.ca',
    password: 'topSec3',
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]

module.exports = users
