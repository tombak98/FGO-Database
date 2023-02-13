import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from "./components/Navbar";
import AllCards from "./components/AllCards";
import SingleCard from "./components/SingleCard";

// main component

function App(){

    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<AllCards/>}/>
            <Route path="/cards/:id" element={<SingleCard/>}/>
        </Routes>
        </>

    )
}

export default App;