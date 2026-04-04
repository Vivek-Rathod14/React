import { useState } from 'react'
import Header from './components/header'
import WorkPost from './components/workPost'
import {Route, Routes} from "react-router-dom"
import ShowWork from './components/ShowWork'
import EditWork from './components/EditWork'

function App() {


  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/postWork" element={<WorkPost/>} ></Route>
        <Route path="/Work" element={<ShowWork/>} ></Route>
        <Route path="/edit/:id" element={<EditWork />} />
      </Routes>
    </>
  )
}

export default App
