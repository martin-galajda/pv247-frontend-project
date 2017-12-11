import { Container } from './styled'

const HomeContent = () => (
  <Container>
    <h1>Hello <span role="img" aria-label="cool icon">👋</span>, </h1>
    <h2>This is home page for messsaging app for PV247</h2>
    <ul>
      <h3>You can do some stuff here:</h3>
      <li>Click on your avatar image in the upper right corner to update your profile (image & name)
        <span role="img" aria-label="cool icon">↗️</span>
      </li>
      <li>On the left sidebar, there is button for creating channels
        <span role="img" aria-label="cool icon">➕</span>
      </li>
      <li>Channels can be updated
        <span role="img" aria-label="cool icon">🤟</span>
      </li>
      <li>Once channels are created, you can navigate to them and post messages
        <span role="img" aria-label="cool icon">✍️</span>
      </li>
      <li>Messages can be upvoted, downvoted and also removed from channel
        <span role="img" aria-label="cool icon">👊</span>
      </li>
      <li>Messages are periodically pulled (every 10s)
        <span role="img" aria-label="cool icon">💪</span>.
        No websockets tho
        <span role="img" aria-label="cool icon">😱</span>
      </li>
    </ul>
  </Container>
)

export default HomeContent
