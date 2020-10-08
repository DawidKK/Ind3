import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.accentColor};
  color: ${props => props.theme.black};
  cursor: pointer;
  text-transform: uppercase;
  padding: 0.6rem 1.5rem;
  transition: all 0.5s;
  text-align: center;
  margin-top: 1rem;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
`

export default Button
