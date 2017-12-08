import { injectGlobal } from 'styled-components'

/* eslint-disable no-unused-expressions */
injectGlobal`
  @font-face {
    font-family: 'Trump Gothic East';
    src:
      url('/static/fonts/trump-gothic-east_bold.ttf') format('truetype'),
      url('/static/fonts/trump-gothic-east_bold.woff2') format('woff2'),
      url('/static/fonts/trump-gothic-east_bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Maison Neue';
    src:
      url('/static/fonts/maison-neue-book.ttf') format('truetype'),
      url('/static/fonts/maison-neue_book.woff2') format('woff2'),
      url('/static/fonts/maison-neue_book.woff') format('woff');
  }
  html {
    font-size: 62.5%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    font-size: 1.4rem;
    background-color: #FFFFFF;
    color: #111517;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  html, body, body > div:first-child, #__next, #__next > div:first-child  {
    height: 100%;
    margin: 0;
  }

  * {
    font-family: 'Maison Neue', sans-serif;
  }
  p,
  label {
    line-height: 1.5em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  label {
    margin: 0;
  }

  .ReactModal__Overlay {
    z-index: 150;
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`
