import { SidebarContainer, SidebarSectionHeader, SidebarSectionHeaderTitle, IconsWrapper } from './styled'
import ChannelTitle from './channel-title'
import PlusIcon from 'react-icons/lib/fa/plus'
import PropTypes from 'prop-types'

const Sidebar = ({ onAddChannel, channels, removeChannel, editChannel, router }) => (
  <SidebarContainer>
    <SidebarSectionHeader>
      <SidebarSectionHeaderTitle>
        Channels
      </SidebarSectionHeaderTitle>
      <IconsWrapper className="icon">
        <PlusIcon onClick={onAddChannel}/>
      </IconsWrapper>
    </SidebarSectionHeader>

    {channels.map(channel =>
      (<ChannelTitle
        removeChannel={removeChannel}
        editChannel={editChannel}
        key={channel.id}
        router={router}
        {...channel}
      />))
    }
  </SidebarContainer>
)

Sidebar.propTypes = {
  onAddChannel: PropTypes.func.isRequired,
  removeChannel: PropTypes.func.isRequired,
  editChannel: PropTypes.func.isRequired,
  channels: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
}


export default Sidebar
