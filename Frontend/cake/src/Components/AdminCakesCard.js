import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import {TbCurrencyNaira} from "react-icons/tb"
import {BsTelephoneFill} from "react-icons/bs"
import  PaystackPop  from '@paystack/inline-js';
import { Button, Modal, Carousel, Form} from "react-bootstrap"
import axios from 'axios';


const AdminCakesCard = ({_id, name, category, quantity, amount, description, phone, image, slider1, slider2, slider3}) => {
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [quantityy, setQuantityy] = useState("")
    const [date, setDate] = useState("")
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
     const handleShow3 = () => setShow3(true);



    const [cakename, setCakename]= useState(name)
    const [cakequantity, setCakequantity]= useState(quantity)
    const [cakecategory, setCakecategory]= useState(category)
    const [cakeamount, setCakeamount]= useState(amount)
    const [cakedescritption, setCakedescription]= useState(description)
    const [cakephone, setCakephone]= useState(phone)
    const [cakeimage, setCakeimage]= useState(image)
    const [cakeslider1, setCakeslider1]= useState(slider1)
    const [cakeslider2, setCakeslider2]= useState(slider2)
    const [cakeslider3, setCakeslider3]= useState(slider3)


// The Paystack Payment Function
const makePayment = (e) =>{
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key: "pk_test_9abbe91472dfc9d57ba291a64ed8c295c669ca39",
        amount:  quantityy* amount * 100,
        firstname: `${firstname}, needs ${quantityy} ${name} on ${date}  and `,
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
  
    const deleteCake =async()=>{
            try {
                if(window.confirm(`Do You want to delete ${name}`)){
                    await axios.delete(`/cake/api/v1/deleteCake/${_id}`)
                }
               
            } catch (error) {
                console.log(error)
            }
    }


    const editCake = async()=>{
        try {
            await axios.patch(`/cake/api/v1/updateCake/${_id}`, {
                name: cakename,
                quantity: cakequantity,
                category: cakecategory,
                amount: cakeamount,
                description: cakedescritption,
                phone: cakephone,
                image: cakeimage,
                slider1: cakeslider1,
                slider2: cakeslider2,
                slider3: cakeslider3
            })
            .then((res)=>console.log(res.data))

                setCakename("")
                setCakequantity("")
                setCakecategory("")
                setCakeamount("")
                setCakedescription("")
                setCakephone("")
                setCakeimage("")
                setCakeslider1("")
                setCakeslider2("")
                setCakeslider3("")
        } catch (error) {
            console.log(error)
        }
    } 


  return (
    <div>

    <Card style={{ width: '20rem', height:"35rem"}}>
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
            <Button variant="dark" onClick={handleShow}>More Details</Button> <br /> <br />
            <Button variant="dark" style={{marginLeft: "8px"}} onClick={handleShow3} > Edit Cake</Button> {""}
            <Button variant="dark" onClick={deleteCake} >Delete Cake</Button>
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
                value={quantityy}
                onChange={(e)=>setQuantityy(e.target.value) }
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

    


    {/* Edit Cake modal*/}
    <Modal show={show3} onHide={handleClose3} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter cake name"
                  value={cakename}
                  onChange={(e)=>setCakename(e.target.value)}
                  autoFocus 
                /> <br />

              <Form.Label>Quantity</Form.Label>
                <Form.Control 
                type="number"
                placeholder={`enter the quantity you have`}
                value={cakequantity}
                onChange={(e)=>setCakequantity(e.target.value) }
               />
                <br />

                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the cake category"
                  value={cakecategory}
                  onChange={(e)=>setCakecategory(e.target.value)}
                  
                /> <br />


                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Enter cake Amount"
                  value={cakeamount}
                  onChange={(e)=>setCakeamount(e.target.value)}
                  
                /> <br />


                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter cake description"
                  value={cakedescritption}
                  onChange={(e)=>setCakedescription(e.target.value)}
                  
                /> <br />


                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone Number"
                  value={cakephone }
                  onChange={(e)=>setCakephone(e.target.value)}
                  
                /> <br />


                <Form.Label>image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter cake image"
                  value={cakeimage }
                  onChange={(e)=>setCakeimage(e.target.value)}
                  
                /> <br />


                <Form.Label>Slider1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter cake slider1 Image"
                  value={cakeslider1 }
                  onChange={(e)=>setCakeslider1(e.target.value)}
                  
                /> <br />


                <Form.Label>Slider2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter cake slider2 Image"
                  value={cakeslider2 }
                  onChange={(e)=>setCakeslider2(e.target.value)}
                  
                /> <br />


                <Form.Label>Slider3</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter cake slider3 Image"
                  value={cakeslider3 }
                  onChange={(e)=>setCakeslider3(e.target.value)}
                  
                /> <br />


                
              
              
              </Form.Group>
            </Form>









        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={editCake}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  )
}

export default AdminCakesCard