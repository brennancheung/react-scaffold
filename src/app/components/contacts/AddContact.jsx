import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddContactForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Name</label>
      <div>
        <Field name="name" component="input" type="text" placeholder="Name" />
      </div>
    </div>
    <div>
      <button type="submit" disabled={pristine || submitting}>Submit</button>
    </div>
  </form>
)

export default reduxForm({
  form: 'AddContact'
})(AddContactForm)
