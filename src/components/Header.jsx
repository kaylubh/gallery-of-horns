// react
import { useState } from 'react';
// bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

function Header() {

  // toggle light/dark color theme
  const [colorMode, setColorMode] = useState('light');
  const body = document.querySelector('body');

  body.setAttribute('data-bs-theme', colorMode);

  function toggleColorMode() {
    if (colorMode === 'light') {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
  }

  // render Header
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <h1>Gallery of Horns</h1>
          </Navbar.Brand>
          <InputGroup className='justify-content-end'>
            <i className='bi bi-lightbulb'></i>
            <Form.Switch onInput={toggleColorMode} aria-label='dark color theme mode'></Form.Switch>
            <i className='bi bi-lightbulb-fill'></i>
          </InputGroup>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
