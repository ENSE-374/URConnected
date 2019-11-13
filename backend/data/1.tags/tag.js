const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

const tags = [
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e9951'),
    name: 'engineering',
    groups: [
      new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
      new ObjectID('5aa1c2c35ef7a4e97b5e995b')
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e9952'),
    name: 'science',
    groups: [
      new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
      new ObjectID('5aa1c2c35ef7a4e97b5e995c')
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('5aa1c2c35ef7a4e97b5e9953'),
    name: 'art',
    groups: [
      new ObjectID('5aa1c2c35ef7a4e97b5e995b'),
      new ObjectID('5aa1c2c35ef7a4e97b5e995c')
    ],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]

module.exports = tags
