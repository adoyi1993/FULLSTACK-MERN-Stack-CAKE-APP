import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div  style={{backgroundColor: "rgb(166, 166, 166)", height:"100vh", display:"flex", flexWrap: "wrap"}} >
        
        
        

        
        <img src="https://cdn.shopify.com/s/files/1/0512/8378/7930/products/2021-01-0817.30.57_1024x1024.jpg?v=1610098269" alt="landing cake" 
        style={{height:"70vh", marginLeft: "15%", marginTop: "8%", borderRadius: "15px"}}
        />
        
        <div  style={{marginTop: "520px", marginLeft: "50px"}}>
            <h1 style={{color: "whitesmoke"}} >Welcome to the Bakery</h1>
            <h3>WORLD CLASS BAKING AND PASTRY ARTS</h3>

            <Button variant="primary"> <Link to="/cakes" style={{color: "white", textDecoration: "none",  border:"4px solid whider" }} >Order Product</Link> </Button>{' '}


        </div>

        </div>
  )
}

export default Landing