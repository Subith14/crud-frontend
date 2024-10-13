import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function AddRecord({ isModalOpen, onCloseModal }) {
  
  const validationSchema = Yup.object({
    uname: Yup.string().required('First Name is required'),
    lname: Yup.string().required('Last Name is required'),
    number: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone Number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
  });

  
  const formik = useFormik({
    initialValues: {
      uname: '',
      lname: '',
      number: '',
      email: '',
      address: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await axios.post(`http://localhost:5000/addrecord`,  {
          name: values.uname,       
          lastname: values.lname,   
          phno: values.number,     
          email: values.email,
          address: values.address,
        });
        console.log(result);
        onCloseModal(false);
        toast.success("Data Saved Successfully !");
      setTimeout(() => {
        window.location.reload();
      }, 1000); 
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <Modal show={isModalOpen} onHide={onCloseModal}>
      <ToastContainer />
        <Modal.Header closeButton>
          <Modal.Title>USER DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="uname"
                value={formik.values.uname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.uname && !!formik.errors.uname}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.uname}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={formik.values.lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.lname && !!formik.errors.lname}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.lname}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="number"
                placeholder="7305297087"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.number && !!formik.errors.number}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.number}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && !!formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.address && !!formik.errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddRecord;
