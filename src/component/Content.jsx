import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Content({ onOpenModal, onOpenModaltwo }) {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/get`)
      .then(result => setShowData(result.data))
      .catch(err => console.log(err));
  }, []);

  const Delete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/deleteuser/${id}`);
      console.log(res);
      toast.success("Deleted Successfully !");
      setTimeout(() => {
        window.location.reload();
      }, 1000); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <ToastContainer />
        <h5 className='text-center fw-bold my-5'>CRUD OPERATIONS</h5>
        <div className='container d-flex align-items-center justify-content-center'>
          
          <Button variant="success" onClick={onOpenModal}>
            Add Record
          </Button>
        </div>

        <div className='container mt-5'>
          <table className='table table-responsive table-bordered border-dark table-hover text-center'>
            <thead>
              <tr className='bg-info'>
                <th>ID</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email ID</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {showData.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name} {user.lastname}</td>
                  <td>{user.phno}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => onOpenModaltwo(user)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => Delete(user._id)} className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Content;
