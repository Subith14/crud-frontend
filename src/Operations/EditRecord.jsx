import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function EditRecord({ isModalOpentwo, onCloseModaltwo, selectedUser }) {
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    phno: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    if (selectedUser) {
      setUserData({
        name: selectedUser.name,
        lastname: selectedUser.lastname,
        phno: selectedUser.phno,
        email: selectedUser.email,
        address: selectedUser.address
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/updateuser/${selectedUser._id}`, userData);
      onCloseModaltwo(); 
      toast.success("Updated Successfully !");
      setTimeout(() => {
        window.location.reload();
      }, 1000);  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={isModalOpentwo} onHide={onCloseModaltwo}>
        <ToastContainer />
      <Modal.Header closeButton>
        <Modal.Title>Update User Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phno"
              value={userData.phno}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              name="address"
              value={userData.address}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModaltwo}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditRecord;
