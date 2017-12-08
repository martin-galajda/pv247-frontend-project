import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ containerWidth }) => containerWidth || '100%'};
  height: ${({ containerHeight }) => containerHeight || '100%'};
  display: flex;
  align-items: center;
`

export const IconContainer = styled.div`
  width: ${({ iconContainerWidth }) => iconContainerWidth || '300px'};
  height: ${({ iconContainerHeight }) => iconContainerHeight || '300px'};
  margin: auto;
  display: flex;
  align-items: center;

  svg {
    margin: auto;
    font-size: ${({ iconSize }) => iconSize || '64px'};
    animation: icon-spin 2s infinite linear;
  }
`
