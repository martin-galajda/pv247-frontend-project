import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 20px;
  max-width: 80%;
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 26px;
  
  input {
    font-size: 16px;
    padding: 10px 10px 10px 0;
    width: 100%;
    box-sizing: border-box;    
  }
`

export const InputArea = styled.ul`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  list-style: none;
  padding: 4px 6px;
  border: 1px solid #A6A6A6;
  background-color: white;
  border-radius: 3px;
  cursor: text;
  position: relative;
  will-change: transform;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  margin-top: 5px;  
`

export const SelectedInputAreaItem = styled.li`
  display: inline-flex;
  background-color: #F5F7F8;
  border: 1px solid #C1C7CF;
  color: #7C8E9A;
  border-radius: 3px;
  padding: 3px 8px;
  margin-right: 6px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 16px;
  align-items: center;
`

export const InputAreaItem = styled.li`
  display: inline-flex;
  min-width: 150px;
  margin-top: auto;
  margin-bottom: auto;

  input {
    border: none;
    outline: none;
    font-size: 20px;  
  }
`

export const IconWrapper = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 2px;

  svg {
    cursor: pointer;
  }
`
