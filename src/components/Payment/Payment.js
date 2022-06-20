import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import "./payment.css";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      className="btn w-100 text-dark"
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onFormSubmit = (userObj) => {
    //http post req
    axios
      .post("http://localhost:4000/user-api/create-product", userObj)
      .then((response) => {
        alert(response.data.message);
        //if user created
        if (response.data.message === "Product created successfully") {
          //navigate to login
          navigate("/donate");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong in payment");
      });
  };

  return (
    <Container className="mt-3 mb-5">
      <h1 className="text-center text-dark">Payments</h1>

      <Accordion >
        <Card className="bg-light">
          <Card.Header className="text-center">
            <CustomToggle eventKey="0">
              <div className="debit">
                <BsFillCreditCardFill className="card-style5" /> Debit Card
              </div>
            </CustomToggle>
          </Card.Header>
          <Container className="text-dark">
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form onSubmit={handleSubmit(onFormSubmit)}>
                  <Form.Group>
                    <Form.Label>Accepted Cards</Form.Label>
                    <div className="icon-container">
                      <FaCcVisa className="card-style1" />
                      <FaCcAmex className="card-style2" />
                      <FaCcMastercard className="card-style3" />
                      <FaCcDiscover className="card-style4" />
                    </div>

                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      {...register("username", { required: true })}
                    />
                    {/* validation error message for username */}
                    {errors.username && (
                      <p className="text-danger">* Name is required</p>
                    )}

                    <Form.Label>Credit card number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="eg. 1111-2222-3333-4444"
                      {...register("cardnumber", { required: true })}
                    />
                    {/* validation error message for username */}
                    {errors.cardnumber && (
                      <p className="text-danger">* Card number is required</p>
                    )}

                    <Form.Label>Expire Month</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="eg. September"
                      {...register("cardmonth", { required: true })}
                    />
                    {/* validation error message for username */}
                    {errors.cardmonth && (
                      <p className="text-danger">* Card Month is required</p>
                    )}
                    <div className="row">
                      <div className="col-50">
                        <Form.Label>Expire Year</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="eg. 2019"
                          {...register("cardyear", { required: true })}
                        />
                        {/* validation error message for username */}
                        {errors.cardyear && (
                          <p className="text-danger">* Card Year is required</p>
                        )}
                      </div>
                      <div className="col-50">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="eg. 345"
                          {...register("cardcvv", { required: true })}
                        />
                        {/* validation error message for username */}
                        {errors.cardcvv && (
                          <p className="text-danger">* Card CVV is required</p>
                        )}
                      </div>
                    </div>
                    <Button className="t-style" variant="secondary" type="submit">Pay Now
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Container>
        </Card>
      </Accordion>

      <Accordion >
        <Card className="bg-light mt-4">
          <Card.Header className="text-center">
            <CustomToggle eventKey="1">
              <div className="debit">
                <BsFillCreditCardFill className="card-style5" /> Credit Card
              </div>
            </CustomToggle>
          </Card.Header>
          <Container className="text-dark">
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form onSubmit={handleSubmit(onFormSubmit)}>
                  <Form.Group>
                    <Form.Label>Accepted Cards</Form.Label>
                    <div className="icon-container">
                      <FaCcVisa className="card-style1" />
                      <FaCcAmex className="card-style2" />
                      <FaCcMastercard className="card-style3" />
                      <FaCcDiscover className="card-style4" />
                    </div>

                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      {...register("username", { required: true })}
                    />
                    {/* validation error message for username */}
                    {errors.username && (
                      <p className="text-danger">* Name is required</p>
                    )}

                    <Form.Label>Credit card number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="eg. 1111-2222-3333-4444"
                      {...register("cardnumber", { required: true })}
                    />
                    {/* validation error message for username */}
                    {errors.cardnumber && (
                      <p className="text-danger">* Card number is required</p>
                    )}

                    <Form.Label>Expire Month</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="eg. September"
                      {...register("cardmonth", { required: true })}
                    />
                    {/* validation error message for username */}
                    {errors.cardmonth && (
                      <p className="text-danger">* Card Month is required</p>
                    )}
                    <div className="row">
                      <div className="col-50">
                        <Form.Label>Expire Year</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="eg. 2019"
                          {...register("cardyear", { required: true })}
                        />
                        {/* validation error message for username */}
                        {errors.cardyear && (
                          <p className="text-danger">* Card Year is required</p>
                        )}
                      </div>
                      <div className="col-50">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="eg. 345"
                          {...register("cardcvv", { required: true })}
                        />
                        {/* validation error message for username */}
                        {errors.cardcvv && (
                          <p className="text-danger">* Card CVV is required</p>
                        )}
                      </div>
                    </div>
                    <Button className="t-style" variant="secondary" type="submit">Pay Now
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Container>
        </Card>
      </Accordion>

      <Accordion >
        <Card className="bg-light mt-4">
          <Card.Header className="text-center">
            <CustomToggle eventKey="2">
              <div className="debit">
                <FaUserTag className="card-style5" /> UPI ID
              </div>
            </CustomToggle>
          </Card.Header>
          <Container className="text-dark">
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Form onSubmit={handleSubmit(onFormSubmit)}>
                  <Form.Group>
                    <Form.Label>Enter UPI ID</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="example@ybl"
                      {...register("upi", { required: true })}
                    />
                    {/* validation error message for username */}
                    {errors.upi && (
                      <p className="text-danger">* UPI is required</p>
                    )}
                    <Button className="t-style" variant="secondary" type="submit">Pay Now
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Container>
        </Card>
      </Accordion>
    </Container>
  );
}

export default Payment;
