const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'rohitsharma',
      name: 'Rohit Sharma',
      email: 'rohitsharma@mi.com',
      avatarURL: '/rohitsharma.png'
    },
    {
      id: 'harbhajansingh',
      name: 'Harbhajan Singh',
      email: 'harbhajansingh@mi.com',
      avatarURL: '/harbhajansingh.png'
    },
    {
      id: 'hardikpandya',
      name: 'Hardik Pandya',
      email: 'hardikpandya@mi.com',
      avatarURL: '/hardikpandya.png'
    },
    {
      id: 'mitchelljohnson',
      name: 'Mitchell Johnson',
      email: 'mitchelljohnson@mi.com',
      avatarURL: '/mitchelljohnson.png'
    },
    {
      id: 'kieronpollard',
      name: 'Kieron Pollard',
      email: 'kieronpollard@mi.com',
      avatarURL: '/kieronpollard.png'
    },
    {
      id: 'jaspritbumrah',
      name: 'Jasprit Bumrah',
      email: 'jaspritbumrah@mi.com',
      avatarURL: '/jaspritbumrah.png'
    },
    {
      id: 'abdevilliers',
      name: 'AB De Villiers',
      email: 'abdevilliers@rcb.com',
      avatarURL: '/abdevilliers.png'
    },
    {
      id: 'viratkohli',
      name: 'Virat Kohli',
      email: 'viratkohli@rcb.com',
      avatarURL: '/viratkohli.png'
    },
    {
      id: 'mahendrasinghdhoni',
      name: 'Mahendra Singh Dhoni',
      email: 'mahendrasinghdhoni@rpsg.com',
      avatarURL: '/mahendrasinghdhoni.jpg'
    },
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
