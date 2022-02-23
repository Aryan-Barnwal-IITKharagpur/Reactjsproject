import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../Styles/CardContainer.css";
import { Modal } from "react-bootstrap";
import { FilledForm } from "../constants/FilledForm";
import FormModal from "./FormModal";

function CardContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="cardContainer p-3">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
            <Card.Body className="card">
              <Card.Title className="cardTitle">
                <strong>{FilledForm.type}</strong>
              </Card.Title>
              <Card.Text className="cardDescription">
                <div>Sector: {FilledForm.company_overview.sector}</div>
                <div>Designation: {FilledForm.job_detail.designation}</div>
              </Card.Text>
              <Button
                className="cardButton"
                variant="outline-light"
                onClick={handleShow}
              >
                View
              </Button>

              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {FilledForm.type === "INF" ? (
                      <div>Internship Notification Form</div>
                    ) : (
                      <div>Job Notification Form</div>
                    )}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FormModal unique_id={FilledForm.unique_id} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
            <Card.Body className="card">
              <Card.Title className="cardTitle">
                <strong>{FilledForm.type}</strong>
              </Card.Title>
              <Card.Text className="cardDescription">
                <div>Sector: {FilledForm.company_overview.sector}</div>
                <div>Designation: {FilledForm.job_detail.designation}</div>
              </Card.Text>
              <Button
                className="cardButton"
                variant="outline-light"
                onClick={handleShow}
              >
                View
              </Button>

              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {FilledForm.type === "INF" ? (
                      <div>Internship Notification Form</div>
                    ) : (
                      <div>Job Notification Form</div>
                    )}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FormModal unique_id={FilledForm.unique_id} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
            <Card.Body className="card">
              <Card.Title className="cardTitle">
                <strong>{FilledForm.type}</strong>
              </Card.Title>
              <Card.Text className="cardDescription">
                <div>Sector: {FilledForm.company_overview.sector}</div>
                <div>Designation: {FilledForm.job_detail.designation}</div>
              </Card.Text>
              <Button
                className="cardButton"
                variant="outline-light"
                onClick={handleShow}
              >
                View
              </Button>

              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {FilledForm.type === "INF" ? (
                      <div>Internship Notification Form</div>
                    ) : (
                      <div>Job Notification Form</div>
                    )}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <FormModal unique_id={FilledForm.unique_id} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </div>
          {/* <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
            <Card.Body className="card">
              <Card.Title className="cardTitle">
                <strong>Card Title</strong>
              </Card.Title>
              <Card.Text className="cardDescription">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="cardButton" variant="outline-light">
                Edit
              </Button>
            </Card.Body>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
            <Card.Body className="card">
              <Card.Title className="cardTitle">
                <strong>Card Title</strong>
              </Card.Title>
              <Card.Text className="cardDescription">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="cardButton" variant="outline-light">
                Edit
              </Button>
            </Card.Body>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
            <Card.Body className="card">
              <Card.Title className="cardTitle">
                <strong>Card Title</strong>
              </Card.Title>
              <Card.Text className="cardDescription">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="cardButton" variant="outline-light">
                Edit
              </Button>
            </Card.Body>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
            <Card.Body className="card">
              <Card.Title className="cardTitle">
                <strong>Card Title</strong>
              </Card.Title>
              <Card.Text className="cardDescription">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="cardButton" variant="outline-light">
                Edit
              </Button>
            </Card.Body>
          </div> */}
          {/* <div className="col-lg-3 col-md-4 col-sm-12 m-3 ">
            <Card.Body className="card">
              <Card.Title className="cardTitle">
                <strong>Card Title</strong>
              </Card.Title>
              <Card.Text className="cardDescription">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="cardButton" variant="outline-light">
                Edit
              </Button>
            </Card.Body>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default CardContainer;
