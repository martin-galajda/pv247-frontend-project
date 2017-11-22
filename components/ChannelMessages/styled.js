import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  padding: 30px;
  flex-direction: column;
  align-items: stretch;
`

export const MessagesArea = styled.div`
  height: auto;
  width: 100%;
  flex: 9;
  overflow: scroll;
`

export const EditorArea = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  overflow: scroll;
  flex: auto;
`