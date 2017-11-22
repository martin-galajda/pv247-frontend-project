import styled from 'styled-components'

export const ProfilePhoto = styled.div`
  background-image: ${props => `url("${props.user.customData.profileImageUrl}")`};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`