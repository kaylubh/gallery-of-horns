// react
import { useState } from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// css
import './App.css';
// data
import beastsData from './data/beasts-data.json';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import SelectedBeast from './components/SelectedBeast';
import HornFilter from './components/HornFilter';

function App() {

  // display selectedBeast modal
  const [showSelectedBeast, setShowSelectedBeast] = useState(false);
  const [selectedBeast, setSelectedBeast] = useState({});

  function renderSelectedBeast(beastToRender) {
    setShowSelectedBeast(true);
    setSelectedBeast(beastToRender);
  }

  function closeSelectedBeast() {
    setShowSelectedBeast(false);
    setSelectedBeast({});
  }

  // filter gallery data
  const [currentBeasts, setCurrentBeasts] = useState(beastsData);

  function filterBeasts(filterSelection) {
    let filteredBeasts;

    if (filterSelection !== 'all') {
      filteredBeasts = beastsData.filter(beast => beast.horns === parseInt(filterSelection));
    } else {
      filteredBeasts = beastsData;
    }

    setCurrentBeasts(filteredBeasts);
  }

  // render App
  return (
    <Container>

      <Header />

      <HornFilter
        onSelect={filterBeasts}
      />

      <Gallery
        beastsData={currentBeasts}
        onRequest={renderSelectedBeast}
      />

      <SelectedBeast
        show={showSelectedBeast}
        beast={selectedBeast}
        onClose={closeSelectedBeast}
      />

      <Footer />

    </Container>
  )
}

export default App;
