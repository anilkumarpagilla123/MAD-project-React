import { React } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Card, Container, Form } from "react-bootstrap";
import Donate5 from "../images/donate5.jpg";
import { useNavigate } from "react-router-dom";

function Donate() {

    const navigate = useNavigate();

    const navigateTopayment = () => {
      
      navigate('/payment');
    };
   
  return (
    <Container className="mt-3 d-block mx-auto mb-5">
      <div className="row">
        <div className="col-md-4 mt-5">
          <Card className="shadow-lg">
            <Card.Img src={Donate5} className="shadow-lg" />
          </Card>
          <p className="info">
            "Giving is not just about making a donation,It is about making a
            difference"
          </p>
          <Form>
            
                  <Button
                    variant="secondary"
                    className="shadow-lg"
                    type="submit" onClick={navigateTopayment}
                  >
                    Donate Now
                  </Button>
               
          </Form>
        </div>
        <div className="col-md-8 mb-4">
          <Modal.Dialog className="shadow-lg">
            <Modal.Title className="text-center mt-3">
              "Be the change that you want to see!"
            </Modal.Title>
            <Modal.Body>
              <p className="info">
                Each one of us has the capacity to make a difference and help
                lend a helping hand to the less fortunate around us. Your strong
                intent to make a difference, can take the form of engaging in
                campaigns for the betterment of the society, volunteering and
                working directly with communities, supporting fund raising and
                monetary contributions to the causes of your choice. Be a part
                of our endeavour to work for the marginalised.
              </p>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      </div>
    </Container>
  );
}
export default Donate;
