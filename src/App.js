import React , { Component } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import ShoppingCartProvider from "./context/ShoppingCartContext"
import "./index.css"


class App extends Component {
 

    render() {
        return (
            <ShoppingCartProvider>

            <Navbar />
            <Container className="mb-4">
            <Routes>
                <Route path="/" element={<Store />} />
                <Route path="/login" element={<About />} />
            </Routes>
        </Container>
            </ShoppingCartProvider>
        )
        
    }
}
export default App;