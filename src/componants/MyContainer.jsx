import React from 'react'
import { Container}from "react-bootstrap"
import Filter from "../assets/filters.svg"
function MyContainer() {
    const containerStyle = {
        backgroundColor:' rgb(255,222,89)',
      
        
    }
  return (
    <Container style={containerStyle}>
        <div className='d-flex flex-row  justify-content-center m-auto pt-3 gap-4'>
            <div>

            <img src={Filter} />
            </div>
            <div>
                <p>
                Additional Filters
                </p>
            </div>
            

        </div>
    </Container>
  )
}

export default MyContainer