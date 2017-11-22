import styled from 'styled-components'

export const Form = styled.form`
  padding-left: 20%;
  padding-right: 20%;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  padding-top: 34px;

  .dropzone {
    width: 70%;
    max-width: 230px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    border: 1px solid #eee;
    cursor: pointer;
    display: flex;

    h1 {
      padding: 10px;
      text-align: center;
      color: #ddd;
      margin: auto;
    }
  }
`

export const FormInput = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 80%;
  min-width: 100px;
  margin-left: auto;
  margin-right: auto;
  font-size: 26px;
  padding-right: 15px;

  input {
    font-size: 26px;
    padding: 10px;
    border: 1px solid black;
    width: 100%;
    border-radius: 5px;
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
export const DropzoneHeader = styled.div`
  margin: 40px auto 0px auto;
  font-size: 16px;
  width: 70%;
  text-align: center;
  margin-bottom: 10px;
`

export const Title = styled.h1`
  width: auto;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
`
