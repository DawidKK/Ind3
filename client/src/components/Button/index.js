import React from 'react'
import PropTypes from 'prop-types'

import ButtonStyles from '../../assets/stylesheet/Button'

export const Button = ({ label, fullWidth = false }) => {
  return (
    <ButtonStyles fullWidth={fullWidth}>
      {label}
    </ButtonStyles>
  )
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
}

export default Button
