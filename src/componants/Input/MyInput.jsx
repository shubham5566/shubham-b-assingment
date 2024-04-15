import React from 'react'
import{ Container,Button} from "react-bootstrap"
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./myInput.css"
function MyInput() {
  return (
    <>
    <Container>
      

    <div className='input-card d-flex ' >
      <input type="text" placeholder="Search..." />
      <Button type="submit" variant="light" className="search-button">
      <FaMagnifyingGlass />
      </Button>
    </div>
      

    </Container>
    
    </>
  )
}

export default MyInput 