import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { editUser } from "../services/UserService";

function ModelEditUser(props) {
  const { editShow, setEditShow, editDataShow } = props;

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => setEditShow(false);
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  // console.log(">>>check props: ", props);

  useEffect(() => {
    if (editShow) {
      setFirstName(editDataShow.first_name);
      setLastName(editDataShow.last_name);
      setEmail(editDataShow.email);
    }
  }, [editDataShow]);

  const handleSaveUser = () => {
    editUser(editDataShow.id, first_name, last_name, email);
    setEditShow(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    toast.success("Edit user successfully");
    // console.log(">>>check response:", response);
  };

  return (
    <>
      <Modal
        show={editShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>First name:</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              required
              onChange={handleFirstNameChange}
              value={first_name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last name:</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              required
              onChange={handleLastNameChange}
              value={last_name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              onChange={handleEmailChange}
              value={email}
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

export default ModelEditUser;
