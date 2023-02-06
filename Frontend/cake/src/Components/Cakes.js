import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CakeCard from './CakeCard'
import "../Components/cakes.css"
import { MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {IoSearchCircleOutline} from "react-icons/io5"
import Categories from './Categories';


const Cakes = () => {
    const [cakes, setCakes] = useState([])
    const [showSearchAlert, setShowSearchAlert] = useState(false);
    const [search, setSearch]= useState("")
    const [filtered, setFiltered] = useState([])
 
    const [products, setProducts] =  useState([])

    

    const uri = "/cake/api/v1/getAllCakes"
    const fetchCakes = async()=>{
        await axios.get(uri)
        .then((res)=>{
        setCakes(res.data) 
        setProducts(res.data)}
        )
        .catch((err)=>{console.log(err)})
        
    }

    const allCategories = [
        "all",
        ...new Set(cakes.map((cake)=>cake.category)),
    ]

    const [categories, setCategories] = useState(allCategories)

    const filterProduct =  (category)=>{
        if(category === "all"){
            setCakes(products)
            return
        }
      

      



        const newProducts =  products.filter((product)=>product.category===category );
            setCakes(newProducts)
    } 


    useEffect(()=>{
        console.log(allCategories)
     
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
        
        <div className="categories" style={{width:"50%", margin: "auto", marginTop:"10px"}} >
        <Categories filterItems={filterProduct} categories={categories} />
        </div>
        
         
    <div className='cakes' style={{marginTop: "70px", marginLeft:"100px", display:"flex", flexDirection:"row", flexWrap:"wrap", gap: "70px"}}>
        {filtered.map((cake)=>{
            return(
            <div key={cake._id}>
                <CakeCard  {...cake}/>
            </div>)

        })}
</div>
</>
    
  )
}

export default Cakes