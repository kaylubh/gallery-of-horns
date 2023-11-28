// import data
import images from '../data/image-data.json';
// import components
import HornedBeast from './HornedBeast';

function Gallery() {
  return (
    <main>
      {/* GitHub Copilot Chat helped me understand how to write this loop */}
      {images.map((image) => {
        return <HornedBeast key={image._id} title={image.title} description={image.description} imageUrl={image.image_url} />
      })}
    </main>
  )
}

export default Gallery;
