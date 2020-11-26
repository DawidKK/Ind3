import React from 'react'

import FormStyles from '../../assets/stylesheet/FormStyles'

import Button from '../Button'
import Field from '../Field'

const Form = ({ handleSubmit, name, handleChange, value }) => {
  return (
    <FormStyles onSubmit={handleSubmit}>
      <Field name={name} handleChange={handleChange} value={value} type="text" placeholder="Enter todo" />
      <Button label="submit" fullWidth/>
    </FormStyles>
  )
}

export default Form
