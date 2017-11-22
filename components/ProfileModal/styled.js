import styled from 'styled-components'

export const ModalHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  height: 34px;
  position: fixed;
`

export const IconWrapper = styled.div`
  position: fixed;
  right: 10px;
  font-size: 26px;
  text-align: center;
  svg {
    cursor: pointer;
  }
`

export const ModalFooter = styled.div`
  width: 100%;
  border-top: 1px solid black;
  position: fixed;
  height: 60px;
  bottom: 0px;

  button {
    padding-top: 10px;
    font-size: 20px;
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0,0,0,0.2);
    background: rgb(28,184,65);
    padding: 10px;
    margin: 10px;
    border: none;
    font-family: sans-serif;
    line-height: 0.8;
    cursor: pointer;
    position: fixed;
    right: 20px;
  }
`
