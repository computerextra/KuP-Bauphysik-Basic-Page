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
      {/* Impressum */}
      <Modal show={showImpressum} onHide={handleCloseImpressum}>
        <Modal.Header closeButton>
          <Modal.Title>Impressum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            K&amp;P Bauphysik GmbH
            <br />
            Ederweg 4-6
            <br />
            34277 Fuldabr&uuml;ck
          </p>

          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Dipl.-Ing. Marc Klatecki
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: 0561/94990431
            <br />
            E-Mail: marc [PUNKT] klatecki [AT] kp-bauphysik [PUNKT] de
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle:{" "}
            <a href="https://www.e-recht24.de/impressum-generator.html">
              https://www.e-recht24.de/impressum-generator.html
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImpressum}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Datenschutz */}
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
