let contacts = []

let nextId = 1

export function listContacts () {
  return contacts
}

export function createContact (params) {
  contacts.push({ ...params, id: nextId++ })
}

export function findById (id) {
  return contacts.find(x => x.id === id)
}

export function deleteContact (id) {
  contacts = contacts.filter(x => x.id !== id)
}

export function updateContact (id, params) {
  contacts = contacts.map(x => x.id === id ? {...x, ...params} : x)
}

createContact({ name: 'Brennan' })
createContact({ name: 'Sam' })
createContact({ name: 'John' })
