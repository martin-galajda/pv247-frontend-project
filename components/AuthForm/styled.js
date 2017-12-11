import styled from 'styled-components'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 550px;
  height: 700px;
  color: white;

  display: flex;
  flex-direction: column;

  border: 1px solid #ddd;
  border-radius: 30px;  

  box-shadow: 0px 0px 10px 2px #333;
  opacity: 1;
  z-index: 50;
`

export const Form = styled.form`
  margin: auto;
  text-align: center;
  z-index: 55;
  margin-bottom: 0px;
`

export const FormInput = styled.div`
  margin: 10px;

  width: 350px;

  input {
    width: 100%;
    font-size: 28px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 1px solid #ccc;
    padding: 10px;
    padding-left: 15px;

    &:focus {
      outline: none;
    }
  }

  label {
    text-align: left;
    width: 100%;
    padding-left: 12px;
    display: block;
    padding-bottom: 5px;
    font-size: 18px;
  }

  button {
    padding: 10px;
    font-size: 28px;
    width: 100%;
    border-radius: 30px;
    background: azure;
    color: black;
    cursor: pointer;
    margin-top: 15px;
  }
`

export const LinkNavigation = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  color: white;
  z-index: 55;

  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  
  a {
    color: white;
  }

  a.register {
    margin-left: 5px;
  }

  a.login {
    margin-left: 5px;
  }
`

export const FormBackground = styled.div`
  position: absolute;
  width: 550px;
  height: 700px;
  border-radius: 30px;

  opacity: 0.7;
  background: black;
`

export const FormErrors = styled.div`
  background: #EFDFDF;
  height: 25px;
  padding-top: 10px;
  color: black;
  font-size: 20px;
  border: 1px solid red;
`
