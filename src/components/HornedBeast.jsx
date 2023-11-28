// import react
import { useState } from 'react';

// import bootstrap
import Image from 'react-bootstrap/Image';

function HornedBeast({ title, description, imageUrl }) {

  const [favoriteCount, setFavoriteCount] = useState(0);

  function addFavorite() {
    setFavoriteCount(favoriteCount + 1);
  }

  return (
    <div onClick={addFavorite}>
      <h2>{title}</h2>
      <Image src={imageUrl} alt={description} title={title} rounded fluid></Image>
      <p>
        <span>{description}</span>
        <i className="bi bi-heart-fill"> {favoriteCount}</i>
      </p>
    </div>
  )
}

export default HornedBeast;
