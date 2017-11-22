import styled from 'styled-components'

export const AvatarContainer = styled.div`
  font-size: 32px;
  width: 60px;
  height: 40px;
  text-align: center;
  border-radius: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #eee;
  margin: 10px 0 10px 0;
  cursor: pointer;
  overflow: hidden;
`

export const DropdownItem = styled.div`
  height: auto;
  width: 120px;
  font-size: 16px;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;
  &:hover{
    background: #DC7866;
  }
`
