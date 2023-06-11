import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { postCreateUser } from "../services/UserService";

function ModelAddNew(props) {
  const { show, setShow } = props;
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSaveUser = async () => {
    let response = await postCreateUser(first_name, last_name, email);
    setShow(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    toast.success("User created successfully");
    // console.log(">>>check response:", response);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First name:</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              required
              onChange={handleFirstNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last name:</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              required
              onChange={handleLastNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              onChange={handleEmailChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelAddNew;
