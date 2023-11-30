// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// components
import HornedBeast from './HornedBeast';

function Gallery({ beastsData, onRequest }) {

  function requestRenderSelectedBeast(beastToRender) {
    onRequest(beastToRender);
  }

  const beasts = beastsData.map(beast =>
    <Col key={beast._id}>
      <HornedBeast
        title={beast.title}
        description={beast.description}
        imageUrl={beast.image_url}
        requestSelectedBeast={requestRenderSelectedBeast}
      />
    </Col>
  )

  return (
    <Container>
      <Row>
        {beasts}
      </Row>
    </Container>
  )
}

export default Gallery;
