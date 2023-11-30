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

function App() {

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

  return (
    <Container>

      <Header />

      <Gallery
        beastsData={beastsData}
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
