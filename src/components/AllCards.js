import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTestCards } from "../store/testSlice";

// this components shows all cards.

const AllCards = () => {
    const [cards, setCards] = React.useState([])
    const [input, setInput] = React.useState('')
    const [sort, setSort] = React.useState('')

    const test = useSelector((state) => state.test)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    React.useEffect(()=>{
        async function getCards() {
            const {data} = await axios.get('/api/cards/all')
            setCards(data)
            dispatch(getTestCards(1))
        }
        getCards()
    },[])

    function clickHandler(id) {
        navigate(`/cards/${id}`)
    }

    const filteredCards = cards.filter((object) => {
        if (object.name.toLowerCase().includes(input.toLowerCase())) {
            return true
        } else {
            return false
        }
    })

    const sortedCards = filteredCards.sort((a,b) => {
        if (sort === 'name') {
            return a.name.localeCompare(b.name)
        } else if (sort === 'class') {
            return a.class.localeCompare(b.class)
        }
    })

    return (
        <>
        <div className="search-container">
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Filter by name here'></input>
            <div>
                <span>Sort By:&nbsp;</span>
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option value="">None</option>
                    <option value="name">Name</option>
                    <option value="class">Class</option>
                </select>
            </div>
        </div>
        <div id="hover-select" style={{display:'flex', width:'100%', textAlign:'center', justifyContent:'center', alignItems:'center', fontWeight:'bold', fontSize:'1.5rem'}}>
            <p>Now Hovering: {test.name}</p>
        </div>
        <div id="all-cards-root">
            {sortedCards.map((card)=>
                <div onMouseEnter={()=>dispatch(getTestCards(card.id))} className="single-card" key={card.id} onClick={()=>clickHandler(card.id)}>
                    <img src={card.img}></img>
                    <p>{card.name}</p>
                    <p>Class: {card.class}</p>
                </div>
            )}
        </div>
        </>
    )
}

export default AllCards