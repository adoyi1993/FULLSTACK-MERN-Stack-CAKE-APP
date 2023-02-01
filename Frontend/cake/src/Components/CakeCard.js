import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import {TbCurrencyNaira} from "react-icons/tb"
import {BsTelephoneFill} from "react-icons/bs"

const CakeCard = ({_id, name, quantity, category, amount, description, phone, image, slider1, slider2, slider3}) => {
    const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <Card style={{ width: '20rem', height:"30rem"}}>
      <Card.Img variant="top" src={image} style={{height:"220px"}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        
        <div>
             <span> 
                <strong>
             <span style={{color: "green", fontSize:"24px"}}><TbCurrencyNaira size={25}/>{amount} </span> 
             <span style={{color: "orangered", marginLeft:"48px"}}><BsTelephoneFill  size={20}/>{phone} <br /> <br /></span> </strong>
            </span>
            </div>
            <div className="btns" style={{marginLeft: "22px"}}>
            <Button variant="primary">Order Cake</Button> {" "}
            <Button variant="dark" onClick={handleShow}>More Details</Button>
            </div>
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
          style={{height:"500px", width:"220px"}}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
          style={{height:"500px", width:"220px"}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
          style={{height:"500px", width:"220px"}}
        />
      </Carousel.Item>
    </Carousel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Pay
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    



    </div>
  )
}

export default CakeCard