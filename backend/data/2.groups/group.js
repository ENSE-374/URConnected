const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

const groups = [
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    tags: [
      new ObjectID('5aa1c2c35ef7a4e97b5e9951'),
      new ObjectID('5aa1c2c35ef7a4e97b5e9952')
    ],
    members: [
      new ObjectID('aaa1c2c35ef7a4e97b5e9955'),
      new ObjectID('aaa2c2c35ef7a4e97b5e9955'),
      new ObjectID('aaa3c2c35ef7a4e97b5e9955')
    ],
    messages: [
      new ObjectID('1aa1c2c35ef7a4e97b5e9955'),
      new ObjectID('2aa1c2c35ef7a4e97b5e9955'),
      new ObjectID('3aa1c2c35ef7a4e97b5e9955')
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
    tags: [
      new ObjectID('5aa1c2c35ef7a4e97b5e9951'),
      new ObjectID('5aa1c2c35ef7a4e97b5e9953')
    ],
    members: [],
    messages: [],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e995c'),
    tags: [
      new ObjectID('5aa1c2c35ef7a4e97b5e9952'),
      new ObjectID('5aa1c2c35ef7a4e97b5e9953')
    ],
    members: [],
    messages: [],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]

module.exports = groups
