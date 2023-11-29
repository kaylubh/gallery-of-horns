// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// data
import beasts from '../data/beasts-data.json';
// components
import HornedBeast from './HornedBeast';

function Gallery() {
  return (
    <Container>
      <Row>
        {/* GitHub Copilot Chat helped me understand how to write this loop */}
        {beasts.map((beast) => {
          return (
            <Col key={`grid-${beast._id}`}>
              <HornedBeast key={`beast-${beast._id}`} title={beast.title} description={beast.description} imageUrl={beast.image_url} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Gallery;
