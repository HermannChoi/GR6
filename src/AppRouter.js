import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import LoginPage from './LoginPage/LoginPage'
import CartPage from './CartPage/CartPage'


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter