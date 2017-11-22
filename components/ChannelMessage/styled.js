import styled from 'styled-components'

export const MessageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`

export const ImageContainer = styled.div`
  width: 36px;
  height: 36px;
  display: inline-block;
`

export const MessageHeader = styled.div`
  display: inline-block;
  position: relative;
  top: -25px;
  left: 10px;
  font-size: 12px;

  font-weight: bold;
`

export const HeaderPart = styled.div`
  width: 100%;
  height: 20px;
`

export const MessagePart = styled.div`
  padding-left: 35px;
  width: 100%;
`