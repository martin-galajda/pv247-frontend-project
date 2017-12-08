import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  padding: 30px;
  flex-direction: column;
  align-items: stretch;
  overflow: scroll;
`

export const MessagesArea = styled.div`
  height: auto;
  width: 100%;
  flex: 30;
  overflow: scroll;
  border: 1px solid #fff;
  box-shadow: 0 0 1px 1px #ccc;
`

export const EditorArea = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  overflow: scroll;
  flex: auto;
`
