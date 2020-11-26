import React from 'react'

import InputStyles from '../../assets/stylesheet/InputStyles'

export const Field = ({ name, handleChange, value }) => {
  return <InputStyles name={name} onChange={handleChange} value={value} type="text" placeholder="Enter todo" />
}

export default Field
