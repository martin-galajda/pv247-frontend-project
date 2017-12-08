import { SidebarItem, SidebarItemContainer, IconsWrapper } from './styled'
import PropTypes from 'prop-types'
import RemoveIcon from 'react-icons/lib/fa/minus'
import EditIcon from 'react-icons/lib/fa/edit'
import { renderNothing, branch } from 'recompose'
import { withRouter } from 'next/router'

const HideableIconsWrapper = branch(
  props => !props.show,
  renderNothing,
)(IconsWrapper)

const ChannelTitle = ({ name, id, isOwner, removeChannel, editChannel, router }) => (
  <SidebarItemContainer onClick={() => router.push('/channels', `/channels/${id}`)}>
    <SidebarItem>
      <span>{name}</span>
    </SidebarItem>
    <HideableIconsWrapper show={isOwner}>
      <EditIcon onClick={e => {
        e.stopPropagation()
        editChannel({ channelId: id })
      }} />
      <RemoveIcon onClick={e => {
        e.stopPropagation()
        removeChannel(id)
      }} />
    </HideableIconsWrapper>
  </SidebarItemContainer>
)

ChannelTitle.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isOwner: PropTypes.bool.isRequired,
  removeChannel: PropTypes.func.isRequired,
  editChannel: PropTypes.func.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

HideableIconsWrapper.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default withRouter(ChannelTitle)
