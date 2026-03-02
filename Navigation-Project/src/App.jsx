import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import './App.css'
import ProdcutView from './components/ProdcutView'
import Header from './components/Header'
import ProductAdd from './components/ProdcutAdd'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductAdd/>}></Route>
        <Route path='/ProdcutView' element={<ProdcutView/>}></Route>
      </Routes>
    </>
  )
}

export default App
