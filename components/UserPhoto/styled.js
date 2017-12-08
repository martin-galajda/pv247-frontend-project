import styled from 'styled-components'

export const ProfilePhoto = styled.div`
  background-image: ${props => `url("${(
    props.user.customData && props.user.customData.profileImageUrl)
    || props.defaultImageUrl}")`};
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
