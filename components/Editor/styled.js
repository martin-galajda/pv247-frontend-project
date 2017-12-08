import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  overflow: scroll;
  max-height: 100px;

  &:not(.readonly) {
    border: 1px solid black;
    border-radius: 8px;  
  }

  &.readonly {
    width: 90%;
    font-size: 12px;
    display: inline-flex;

    .DraftEditor-root {
      width: 100%;      
    }

    .public-DraftEditor-content {
      cursor: text;
      padding-left: 3px;

      padding-bottom: 10px;
      padding-top: 10px;
      height: 100%;
    }

    .DraftEditor-editorContainer {
      margin-left: 8px;      
    }
  }

  &.readonly:hover {
    .public-DraftEditor-content {
      background: #F8F8F8;
      cursor: text;
    }
  }
  
  .editor {
    box-sizing: border-box;
    border: 1px solid #ddd;
    cursor: text;
    padding: 16px;
    border-radius: 2px;
    margin-bottom: 2em;
    box-shadow: inset 0px 1px 8px -3px #ABABAB;
    background: #fefefe;
  }

  .editor :global(.public-DraftEditor-content) {
    min-height: 140px;
  }

  .options {
    margin-bottom: 20px;
  }

  .public-DraftEditor-content {
    padding: 10px;
    background: white;
    box-sizing: border-box;
  }

  .DraftEditor-editorContainer {
    background: white;
    overflow: scroll;
    padding-bottom: 5px;
  }
`
