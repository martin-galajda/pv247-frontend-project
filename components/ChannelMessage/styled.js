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
  z-index: 50;
`

export const MessagePart = styled.div`
  padding-left: 35px;
  width: 100%;
  display: flex;

  &:hover {
    background: #F8F8F8;
    cursor: text;

    .public-DraftEditor-content {
      background: #F8F8F8;
      cursor: text;  
    }

    .DrafEditor-root {
      background: #F8F8F8;
      cursor: text;  
    }

    .DraftEditor-editorContainer {
      background: #F8F8F8;
      cursor: text;  
    }
  }

  &:hover {
    .actions {
      display: inline-flex;
    }
  }
`

export const ReactionsPart = styled.div`
  padding-left: 48px;
  width: 100%;
  margin-bottom: 10px;

  svg {
    margin-right: 5px;
  }
`

export const ActionsContainer = styled.div`
  width: auto;
  height: auto;
  display: none;
  min-width: 100px;
  width: 10%;
`

export const IconContainer = styled.div`
  position: relative;
  z-index: 50;
  top: 0px;
  cursor: pointer;
  height: 20px;
  width: 33%;

  svg {
    margin-right: 2px;
    margin-left: 5px;
    margin-bottom: 2px;
  }

  &.active {
    background: whitesmoke;
    color: blue;
  }

  &.like, &.dislike {
    max-width: 32px;
    box-sizing; border-box;
  }

  &.inactive: {
    border: 1px solid #ccc;
    background: whitesmoke;
    padding-right: 5px;
  }

  &.remove {
    font-size: 16px;
    margin-bottom: 2px;
    text-align: right;
    flex-grow: 3;

    svg:hover {
      color: blue;
      cursor: pointer;
    }

    &:hover {
      color: black;
      cursor: initial;  
    }
  }

  &:hover {
    color: blue;
  }
`
