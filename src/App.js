import React from "react";
import {Link, Routes, Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from "./components/Navbar";
import AllCards from "./components/AllCards";


function App(){

    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<AllCards/>}/>
        </Routes>
        </>

    )
}

export default App;