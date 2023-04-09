import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'
import {FaShoppingCart} from "react-icons/fa"


const Navbar = () => {
  const {openCart , cartQuantity} = useShoppingCart()
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='mr-auto'>
            {/* <Nav.Link to="/" as={NavLink}>Home</Nav.Link> */}
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
        </Nav>
        <Button variant='outline-primary' className='rounded-circle' style={{position: "relative"}} onClick={openCart}>
            <FaShoppingCart />
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
            style={{position: "absolute" ,
            color:"white" , width:"1.5rem" , height:"1.5rem" , bottom:0 , right:0 , transform:"translate(25% , 25%)"}}>
                {cartQuantity}
                </div>
        </Button>
      </Container>
    </NavbarBs>
  )
}

export default Navbar
