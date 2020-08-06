import React from 'react'

const Form = ({ handleSubmit, name, handleChange, value }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input name={name} onChange={handleChange} value={value} type="text" placeholder="Enter todo"></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
