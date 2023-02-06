import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AdminCakesCard from './AdminCakesCard'
import "../Components/cakes.css"
import { MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {IoSearchCircleOutline} from "react-icons/io5"
import { Button, Modal, Carousel, Form} from "react-bootstrap"

const AdminCakes = () => {
    const [cakes, setCakes] = useState([])
    const [showSearchAlert, setShowSearchAlert] = useState(false);
    const [search, setSearch]= useState("")
    const [cakename, setCakename]= useState("")
    const [cakequantity, setCakequantity]= useState("")
    const [cakecategory, setCakecategory]= useState("")
    const [cakeamount, setCakeamount]= useState("")
    const [cakedescritption, setCakedescription]= useState("")
    const [cakephone, setCakephone]= useState("")
    const [cakeimage, setCakeimage]= useState("")
    const [cakeslider1, setCakeslider1]= useState("")
    const [cakeslider2, setCakeslider2]= useState("")
    const [cakeslider3, setCakeslider3]= useState("")

    const url1 = "/cake/api/v1/addCake"
    const addCake = async ()=>{
     try {
        await axios.post(url1, {
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

        }).then((res)=>console.log(res.data))

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





    const [filtered, setFiltered] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const uri = "/cake/api/v1/getAllCakes"
    const fetchCakes = async()=>{
        await axios.get(uri)
        .then((res)=>{
        setCakes(res.data) }
        )
        .catch((err)=>{console.log(err)})
        
    }

    useEffect(()=>{
        fetchCakes()
       setFiltered(
           cakes.filter((cake)=> cake.name.toLowerCase().includes(search.toLowerCase()))
        )
    },[ search, cakes])  

  return (
        <>
        <div className="searchbar"  style={{margin:"auto", width:"50%", marginTop:"90px"}}>
        <MDBInputGroup >
        <MDBInput style={{ width:"700px", height:"51px"}} placeholder="Search for cake" onChange={(e)=>setSearch(e.target.value)} value={search} />
        
      </MDBInputGroup>
        </div>
        <Button variant="primary" onClick={handleShow} style={{marginLeft:"120px", marginTop:"50px"}} >
             Add Cakes
            </Button>

    {/** Add Cake Modal*/}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Cake</Modal.Title>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={addCake} >Add Cake</Button>
        </Modal.Footer>
      </Modal>


    <div className='cakes' style={{marginTop: "70px", marginLeft:"100px", display:"flex", flexDirection:"row", flexWrap:"wrap", gap: "70px"}}>
        {filtered.map((cake)=>{
            return(
            <div key={cake._id}>
                <AdminCakesCard  {...cake} />
            </div>)

        })}
</div>
</>
    
  )
}

export default AdminCakes