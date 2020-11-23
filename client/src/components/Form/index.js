import React from 'react'

import FormStyles from '../../assets/stylesheet/FormStyles'
import Button from '../Button'

const Form = ({ handleSubmit, name, handleChange, value }) => {
  return (
    <FormStyles onSubmit={handleSubmit}>
      <input name={name} onChange={handleChange} value={value} type="text" placeholder="Enter todo"></input>
      <Button label="submit" fullWidth/>
    </FormStyles>
  )
}

export default Form
