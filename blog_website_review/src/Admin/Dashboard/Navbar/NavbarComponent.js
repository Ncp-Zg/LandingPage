import React from 'react'
import {Nav, Navbar,Button} from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <Navbar className="bg-dark" variant ={"dark"}>
            <Navbar.Brand as={NavLink} to="/admin/dashboard" style={{marginLeft:"5%"}}>Admin Panel</Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/admin/dashboard">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/admin/dashboard/addPost">Add Post</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/admin/dashboard/posts">All Posts</Nav.Link>
                </Nav.Item>
            </Nav>

            <div className="col-md-3 d-flex align-items-center justify-content-end" style={{marginLeft:"auto", marginRight:"5%"}}>
                <p className="text-white h-100 my-0">Welcome,{" "} <span style={{fontWeight:"bold"}}>Ahmet Mehmet</span></p>
                &nbsp;&nbsp;
                <Button type="button" variant="success" size="sm" bg="success">LogOut</Button>
            </div>
        </Navbar>
    )
}

export default NavbarComponent
