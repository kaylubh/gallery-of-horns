// react
import { useState } from 'react';
// bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
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
          <Navbar.Brand>Gallery of Horns</Navbar.Brand>
          <Form className='justify-content-end'>
            <Form.Switch onInput={toggleColorMode} aria-label='dark color theme mode'></Form.Switch>
          </Form>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
