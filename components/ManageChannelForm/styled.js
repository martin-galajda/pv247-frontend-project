import styled from 'styled-components'

export const Form = styled.form`
  padding-left: 20%;
  padding-right: 20%;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
`

export const FormInput = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 80%;
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 26px;

  input {
    font-size: 26px;
    padding: 10px;
    border: 1px solid black;
    width: 100%;
    border-radius: 5px;
    box-sizing: border-box;    
  }

  button {
    margin-left: auto;
    margin-right: auto;
    width: 100%;    
  }
`

export const FormInputLabel = styled.div`
  width: 100%;
  padding-bottom: 5px;
  font-size: 16px;
`

export const ReactTokenInputLabel = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;  
`

export const Title = styled.h1`
  width: auto;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonsContainer = styled.div`
  max-width: 80%;
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
