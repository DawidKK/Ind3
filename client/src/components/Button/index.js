import React from 'react'
import PropTypes from 'prop-types'

import ButtonStyles from '../../assets/stylesheet/Button'

export const Button = ({ handleCLick, label, fullWidth = false }) => {
  return (
    <ButtonStyles onClick={handleCLick} fullWidth={fullWidth}>
      {label}
    </ButtonStyles>
  )
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  handleCLick: PropTypes.func,
}

export default Button
