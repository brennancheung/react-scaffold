import express from 'express'

import {
  listContacts,
  createContact,
  findById,
  deleteContact,
  updateContact
} from './models/contacts'

let router = express.Router()

router.get('/', (req, res) => {
  const contacts = listContacts()
  res.status(200).send({ contacts })
})

router.post('/', (req, res) => {
  const contact = createContact(req.body)
  res.status(201).send({ contact })
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const contact = findById(id)
  if (!contact) {
    res.status(404).send({ error: 'not found' })
  }

  const updatedContact = updateContact(id, req.body)
  res.status(200).send({ contact: updatedContact })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  deleteContact(id)
})

export default router
