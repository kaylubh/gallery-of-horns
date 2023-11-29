// react
import { useState } from 'react';
// bootstrap
import Card from 'react-bootstrap/Card';

function HornedBeast({ title, description, imageUrl }) {

  const [favoriteCount, setFavoriteCount] = useState(0);

  function addFavorite() {
    setFavoriteCount(favoriteCount + 1);
  }

  return (
    <Card onClick={addFavorite}>
      <Card.Header as="h2">{title}</Card.Header>
      <Card.Body>
        <Card.Img src={imageUrl} alt={description} title={title}></Card.Img>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <i className="bi bi-heart-fill"> {favoriteCount}</i>
      </Card.Footer>
    </Card>
  )
}

export default HornedBeast;
