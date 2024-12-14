import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/login"
import Register from "./components/register"
import Products from "./components/Products";

function App() {
  return (
    <>
    <ToastContainer theme="colored" ></ToastContainer>
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="/products" element={<Products/>} />
</Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
