import React from 'react'
import Button from 'react-bootstrap/Button';

const Categories = ({categories, filterItems}) => {
  return (
    <div>
        {categories.map((category, index)=>{
            return(
                <Button variant="primary"  key={index} onClick={()=>filterItems(category)} >{category}</Button>
            )
        })}
       

    </div>
  )
}

export default Categories