import { SidebarContainer, SidebarItem, SidebarSectionHeader, SidebarSectionHeaderTitle, IconsWrapper } from './styled'
import ChannelTitle from './channel'
import PlusIcon from 'react-icons/lib/fa/plus'

const items = [
  {
    name: 'frontend',
  },
  {
    name: 'backend',
  },
  {
    name: 'design',
  },
  {
    name: 'cooking',
  },
]

const Sidebar = ({ onAddChannel, channels, removeChannel }) => (
  <SidebarContainer>
    <SidebarSectionHeader>
      <SidebarSectionHeaderTitle>
        Channels
      </SidebarSectionHeaderTitle>
      <IconsWrapper className="icon">
        <PlusIcon onClick={onAddChannel}/>
      </IconsWrapper>
    </SidebarSectionHeader>

    {channels.map((channel, idx) => (
      <ChannelTitle removeChannel={removeChannel} key={idx} {...channel}/>
    ))}
  </SidebarContainer>
)

export default Sidebar
