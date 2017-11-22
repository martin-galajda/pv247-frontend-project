import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 15%;
  height: 100%;
  background: #162F3A;
  color: black;
  display: flex;
  flex-direction: column;
  padding-top: 68px;
  min-width: 150px;
  color: white;
`

export const SidebarItemContainer = styled.div`
  padding: 10px 0px 10px 0px;
  font-size: 22px;
  display: flex;
  color: #ccc;
  border: 1px solid #405561;

  &:hover {
    background: #273E4F;
    cursor: pointer;
  }
`

export const SidebarItem = styled.div`
  padding: 10px;
  width: 70%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    color: #ccc;
    text-decoration: none;
  }
`

export const SidebarSectionHeader = styled.div`
  padding: 10px 0px 10px 20px;
  font-size: 22px;
  background: #273E4F;
  display: flex;

  div.icon {
    margin-top: -10px;
    min-width: 33px;
    padding-right: 5px;
  }
`

export const SidebarSectionHeaderTitle = styled.div`
  width: 100%;
  position: block;
  bottom: 0;
`

export const IconsWrapper = styled.div`
  min-width: 60px;
  color: #405561;
  padding-right: 5px;
  
  svg {
    margin-left: 5px;
    cursor: pointer;
    margin-top: 12px;
  }

  svg:hover {
    color: #ccc;
  }
`