// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// css
import './App.css';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <Container>
      <Header />
      <Gallery />
      <Footer />
    </Container>
  )
}

export default App;
