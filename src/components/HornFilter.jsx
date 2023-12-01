// bootstrap
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function HornFilter(props) {

  // handle changes to selector input
  function handleChange(event) {
    const selection = event.target.value;
    props.onSelect(selection);
  }

  // render filter selector
  return (
    <FloatingLabel label='Filter by Horns'>
      <Form.Select onChange={handleChange} aria-label="Filter by Horns">
        <option value='all'>Any</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="100">100</option>
      </Form.Select>
    </FloatingLabel>
  )
}

export default HornFilter;