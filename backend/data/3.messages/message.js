const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

const messages = [
  {
    _id: new ObjectID('1aa1c2c35ef7a4e97b5e9955'),
    text: 'The first message',
    sender: new ObjectID('aaa1c2c35ef7a4e97b5e9955'),
    group_id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('2aa1c2c35ef7a4e97b5e9955'),
    text: 'The second message',
    sender: new ObjectID('aaa2c2c35ef7a4e97b5e9955'),
    group_id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    _id: new ObjectID('3aa1c2c35ef7a4e97b5e9955'),
    text: 'The third message',
    sender: new ObjectID('aaa3c2c35ef7a4e97b5e9955'),
    group_id: new ObjectID('5aa1c2c35ef7a4e97b5e995a'),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
]

module.exports = messages
