// bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';

function SelectedBeast({ show, beast, onClose }) {
  return (
    <Modal show={show} onHide={onClose} size='lg' centered>
      <Modal.Header>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Figure>
          <Figure.Image
            src={beast.imageUrl}
            alt={beast.description}
            title={beast.title}
          />
          <Figure.Caption>{beast.description}</Figure.Caption>
        </Figure>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SelectedBeast;