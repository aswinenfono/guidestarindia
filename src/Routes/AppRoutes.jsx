import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../Components/ScrollToTop'
import { MainPage } from '../pages/MainPage/MainPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes