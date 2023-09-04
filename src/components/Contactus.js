import React from 'react'
import axios from "axios";
import "./Contactus.css"
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (contactObj) => {
    axios
      .post("http://localhost:5000/user-api/contact-us", contactObj)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong in sending message");
      });
  }
  return (
    <div className='container pt-5 mt-3 mb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mr-auto'>
            <h1>How Can we Help?</h1>
            <p className='info'>Please specify the problem you fact while using this application in the message section. If you don't find what you need, fill out our contact form. Contact us for more information </p>
            <ul className="details">
              <li className="d-flex text-black mb-2">
                <span className="mr-3"><span className="fa fa-map-marker px-2"></span></span>  Bachupally , Hyderabad, India
              </li>
              <li className="d-flex text-black mb-2">
                <span className="mr-3">
                  <span className="fa fa-phone px-2"></span>
                </span> 040-3456-7098
              </li>
              <li className="d-flex text-black">
                <span className="mr-3">
                  <span className="fa fa-envelope px-2"></span>
                </span> mad-charity@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <Form onSubmit={handleSubmit(onFormSubmit)}>
              {/* username */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  {...register("name", { required: true })}
                />
                {/* validation error message for username */}
                {errors.name && (
                  <p className="text-danger">* Name is required</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  {...register("email", { required: true })}
                />
                {/* validation error message for username */}
                {errors.email && (
                  <p className="text-danger">* Email is required</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text" as="textarea" rows={5}
                  placeholder="Enter Message"
                  {...register("message", { required: true })}
                />
                {/* validation error message for username */}
                {errors.message && (
                  <p className="text-danger">* Message is required</p>
                )}
              </Form.Group>
              <Button className="t-style mb-5" variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contactus