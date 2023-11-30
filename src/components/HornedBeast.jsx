// react
import { useState } from 'react';
// bootstrap
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {

  // send request ot parent to render a modal of a beast
  function handleSelectBeast() {
    const beastToRender = props;
    props.requestSelectedBeast(beastToRender);
  }

  // favorites tracker
  const [favoriteCount, setFavoriteCount] = useState(0);

  function addFavorite() {
    setFavoriteCount(favoriteCount + 1);
  }

  return (
    <Card>
      <Card.Header as="h2">{props.title}</Card.Header>
      <Card.Body>
        <Card.Img src={props.imageUrl} alt={props.description} title={props.title} onClick={handleSelectBeast}></Card.Img>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer onClick={addFavorite}>
        <i className="bi bi-heart-fill"> {favoriteCount}</i>
      </Card.Footer>
    </Card>
  )
}

export default HornedBeast;
