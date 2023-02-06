import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import {TbCurrencyNaira} from "react-icons/tb"
import {BsTelephoneFill} from "react-icons/bs"
import  PaystackPop  from '@paystack/inline-js';
import { Button, Modal, Carousel, Form} from "react-bootstrap"


const CakeCard = ({_id, name, category, amount, description, phone, image, slider1, slider2, slider3}) => {
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [quantity, setQuantity] = useState("")
    const [date, setDate] = useState("")
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


// The Paystack Payment Function
const makePayment = (e) =>{
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key: "pk_test_9abbe91472dfc9d57ba291a64ed8c295c669ca39",
        amount:  quantity* amount * 100,
        firstname: `${firstname}, needs ${name} on ${date}  and `,
        email,
      
       
       
     
        onSuccess(transaction){
            let message = `Payment Complete! for ${name}, Reference ${transaction.reference}, You can also reach out to ${phone} for a more swifter response.` 
            alert(message)
            console.log(firstname)
            setEmail("")
            setFirstname("")
           
           
           
        
             
        },
        onCancel(){
            alert("You have cancel the transaction")
        }

    })}
  


  return (
    <div>

    <Card style={{ width: '20rem', height:"30rem"}}>
      <Card.Img variant="top" src={image} style={{height:"220px"}} />
      <Card.Body>
        <Card.Title>  <h4 className='bg-primary' style={{color: "white", textAlign:"center"}}>{name}</h4>  </Card.Title>
        <Card.Text>
             <p style={{fontSize:"14px",}} ><b>{description}</b> </p> 
        </Card.Text>
        
        <div>
             <span> 
                <strong>
             <span style={{color: "green", fontSize:"24px"}}><TbCurrencyNaira size={25}/>{amount} </span> 
             <span style={{color: "orangered", marginLeft:"48px"}}><BsTelephoneFill  size={20}/>{phone} <br /> <br /></span> </strong>
            </span>
            </div>
            <div className="btns" style={{marginLeft: "22px"}}>
            <Button variant="primary" onClick={handleShow1}>Order Cake</Button> {" "}
            <Button variant="dark" onClick={handleShow}>More Details</Button>
            </div>
        
            <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"green"}}>  <TbCurrencyNaira size={30} style={{color:"green"}}/>{amount} / {name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoFocus 
                /> <br />

              <Form.Label>Quantity</Form.Label>
                <Form.Control 
                type="number"
                placeholder={`enter the number of ${name} you want`}
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value) }
               />
                <br />


                <Form.Label>Total amount to be paid</Form.Label>
                <Form.Control 
                type="number"
                value={quantity * amount}
                disabled  /> <br />
  
                <Form.Label>Cake Name</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Cake Name"
                value={name}
                required disabled/>

                <br />
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Full Name" 
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                required/>

                <br />
                <Form.Label>Date</Form.Label>
                <Form.Control 
                type="date"
                placeholder="Enter the Date You need the Cake" 
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                required/>
              
              
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" type='submit' onClick={makePayment} >
             Pay Now
            </Button>
          </Modal.Footer>
        </Modal>
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
          
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    



    </div>
  )
}

export default CakeCard