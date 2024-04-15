import React from 'react'
import {Button} from "react-bootstrap"
function MyButton({children}) {
  return (
    <Button>{children}</Button>
  )
}

export default MyButton