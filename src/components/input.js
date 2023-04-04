import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function GridAutoSizingExample() {
  return (
    <Form>
      <Row className="align-items-center my-3 mx-5">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Wikipedia Link
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Link"
          />
        </Col>
        
        
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default GridAutoSizingExample;