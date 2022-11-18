import { FaSpotify } from 'react-icons/fa'
import { Container, Content, TextContent } from './style'

export function Header() {
  return (
    <Container>
      <Content>
        <FaSpotify size={55} />
        <TextContent>
          <h1>Spotify</h1>
          <h3>Clone</h3>
        </TextContent>
      </Content>
    </Container>
  );
}
