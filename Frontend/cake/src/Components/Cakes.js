import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CakeCard from './CakeCard'



const Cakes = () => {
    const [cakes, setCakes] = useState([])

    const uri = "/cake/api/v1/getAllCakes"
    const fetchCakes = async()=>{
        await axios.get(uri)
        .then((res)=>{
        setCakes(res.data) }
        )
        
    }

    useEffect(()=>{
        fetchCakes()
    }, [])

  return (
    <div style={{marginTop: "120px", marginLeft:"100px", display:"grid", gridTemplateColumns:"300px 300px 300px", gap: "70px"}}>
        {cakes.map((cake)=>{
            return(
            <div key={cake._id}>
                <CakeCard  {...cake}/>
            </div>)

        })}


    </div>
  )
}

export default Cakes