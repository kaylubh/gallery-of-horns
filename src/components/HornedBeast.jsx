// import bootstrap
import Image from 'react-bootstrap/Image';

function HornedBeast({ title, description, imageUrl }) {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={imageUrl} alt={description} title={title} rounded fluid></Image>
      <p>{description}</p>
    </div>
  )
}

export default HornedBeast;
