import styled from 'styled-components'

export const DropdownBox = styled.div`
  position: absolute;
  background: black;
  color: white;
  top: 64px;
  z-index: 100;
`

export const Container = styled.div`
  width: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const Caret = styled.div`
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-bottom: 10px solid black;
  top: -10px;
  left: 0px;
  right: 0px;
  position: absolute;
  margin: auto;
`