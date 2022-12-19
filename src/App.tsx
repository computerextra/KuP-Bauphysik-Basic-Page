import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Modal from "react-bootstrap/Modal";

function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const handleCloseImpressum = () => setShowImpressum(false);
  const handleCloseDatenschutz = () => setShowDatenschutz(false);
  const handleShowImpressum = () => setShowImpressum(true);
  const handleShowDatenschutz = () => setShowDatenschutz(true);

  return (
    <>
      <Container className="custom-container">
        <h2 className="text-center">Hier entsteht bald die Webseite von</h2>
        <h1 className="text-center">K&P Bauphysik GmbH</h1>
        <Row className="gx-5 mt-5">
          <Col sm={6} className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="btn-lg "
              onClick={handleShowImpressum}
            >
              Impressum
            </Button>
          </Col>
          <Col sm={6} className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="btn-lg "
              onClick={handleShowDatenschutz}
            >
              Datenschutz
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={showImpressum} onHide={handleCloseImpressum}>
        <Modal.Header closeButton>
          <Modal.Title>Impressum</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImpressum}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDatenschutz} onHide={handleCloseDatenschutz}>
        <Modal.Header closeButton>
          <Modal.Title>Datenschutz</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDatenschutz}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
