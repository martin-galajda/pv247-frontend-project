import styled from 'styled-components'

export default styled.button`
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;

  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .5rem 1rem;
  font-size: 1rem;
  border-radius: .25rem;

  font-size: 26px;
  cursor: pointer;
  width: ${props => props.width ? props.width : '100px'};

  -webkit-transition: all .2s ease-in-out;
  -o-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
`