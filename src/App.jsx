import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import NewsDetail from './components/NewsDetail'
import Category from './components/Category'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favourite from './components/Favourite'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/news/:title' element={<NewsDetail />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
