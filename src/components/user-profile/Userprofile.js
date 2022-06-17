import React from "react";
import { Card, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import "./Userprofile.css"
function Userprofile() {

  //get userObj from redux
  let { userObj } = useSelector(state => state.user);

  return (
    <Card className='profile-style mt-5 shadow-lg'>

      <Card.Body>
        <Card.Text><b>Username : </b>{userObj.username}</Card.Text>
        <Card.Text><b>Email : </b>{userObj.email}</Card.Text>
        <Card.Text><b>City : </b>{userObj.city}</Card.Text>
        <Button variant="secondary">Edit</Button>
      </Card.Body>

    </Card>
  );
}

export default Userprofile;
