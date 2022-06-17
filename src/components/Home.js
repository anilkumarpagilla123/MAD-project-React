import React from "react";
import logoImg1 from "./images/download1.jpg";
import logoImg5 from "./images/download5.jpg";
import logoImg6 from "./images/download6.jpg";
import logoImg3 from "./images/download3.jpg";
import logoImg2 from "./images/download2.jpg";
import logoImg4 from "./images/download4.jpg";
import logoImg7 from "./images/download7.jpg";
import Carousel from 'react-bootstrap/Carousel'
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <Container className="text-center mt-2 mb-5">
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="caro-img d-block w-100"
            src={logoImg6}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="cap-text">"Don't let what you cannot do interfere with what you can do..."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="caro-img d-block w-100"
            src={logoImg3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <p className="cap-text">"Helping people by charity is the most human thing we can do..!"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="caro-img d-block w-100"
            src={logoImg4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p className="cap-text">"It's not how much we give but how much love we put into giving..."</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="child row1 card mt-4 d-block mx-auto shadow-lg mb-5">
        <div className="row">
          <div className="col-md-4">
            <img src={logoImg2}
              className="w-100" alt="" />
          </div>
          <div className="col-md-8 mt-4">
            <p className="lead">Charitable organization is a kind of institution or a business that falls under the
              category of NPO or non-profit organization.This type of organization is often called a foundation or charity.
              It can be based on educational, religious or even based on public interest activities.
              A charity is something which is gifted or donated to an organization or an individual to help them or to benefit them.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1>How You Can Help Children in India</h1>
        <p>You can create change that lasts a lifetime for children in India – in so many ways.</p>
      </div>

      <div className="container-fluid d-flex justify-content-around mt-4">
        <Card className="child shadow-lg" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={logoImg1} className="h-50" />
          <Card.Body>
            <Card.Text>
              Support the India COVID-19 Crisis Children's Relief Fund today to help the millions
              of at-risk children and families in India through this crisis.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="child shadow-lg" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={logoImg5} className="h-50" />
          <Card.Body>
            <Card.Text>
              Be the hero in the life of a child.
              Sponsorship drives lasting change in children’s lives, families and communities.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="child shadow-lg" style={{ width: '20rem' }}>
          <Card.Img variant="top" src={logoImg7} className="h-50" />
          <Card.Body>
            <Card.Text>
              Give a meaningful gift that will help transform children’s
              lives and futures in India and beyond. There’s something for everyone!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>




    </Container>
  );
}

export default Home;