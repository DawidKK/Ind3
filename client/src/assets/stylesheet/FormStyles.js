import styled from 'styled-components'

const FormStyles = styled.form`
  padding: 2rem;

  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    background: ${props => props.theme.bgLight};
    border: 1px solid ${props => props.theme.grey};
    color: ${props => props.theme.white};
    transition: border-color 0.3s;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.accentColor};
    }
  }
`
export default FormStyles
