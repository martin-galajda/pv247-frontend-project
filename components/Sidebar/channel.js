import { SidebarItem, SidebarItemContainer, IconsWrapper } from './styled'
import PropTypes from 'prop-types'
import RemoveIcon from 'react-icons/lib/fa/minus'
import EditIcon from 'react-icons/lib/fa/edit'
import Link from 'next/link'

const ChannelTitle = ({ name, id, isOwner, removeChannel }) => (
  <SidebarItemContainer>
    <SidebarItem>
      <Link href={`/channels`} as={`/channels/${id}`} prefetch>
        <a>{name}</a>
      </Link>
    </SidebarItem>
    <IconsWrapper>
      <EditIcon />
      <RemoveIcon onClick={() => removeChannel(id)} />
    </IconsWrapper>
  </SidebarItemContainer>
)

export default ChannelTitle
