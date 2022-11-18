import { FaSpotify } from 'react-icons/fa'
import { Container, Content, TextContent } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <FaSpotify size={55} />
        <TextContent>
          <h1 className="text-3xl font-semibold">Spotify</h1>
          <h3 className="text-xl font-medium leading-3">Clone</h3>
        </TextContent>
      </Content>
    </Container>
  );
}
