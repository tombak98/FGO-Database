import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// this components shows all cards

const AllCards = () => {
    const [cards, setCards] = React.useState([])
    const [input, setInput] = React.useState('')
    const [sort, setSort] = React.useState('name')

    const navigate = useNavigate()

    React.useEffect(()=>{
        async function getCards() {
            const {data} = await axios.get('/api/cards/all')
            console.log(data)
            setCards(data)
        }
        getCards()
    },[])

    function clickHandler(id) {
        navigate(`/cards/${id}`)
    }

    console.log(input)

    const filteredCards = cards.filter((object) => {
        if (object.name.toLowerCase().includes(input.toLowerCase())) {
            return true
        } else {
            return false
        }
    })

    const sortedCards = filteredCards.sort((a,b) => {
        if (sort === 'name') {
            return a.name - b.name
        } else {
            return a.class - b.class
        }
    })

    return (
        <>
        <div className="search-container">
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Filter by name here'></input>
            <div>
                <span>Sort By:&nbsp;</span>
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="class">Class</option>
                </select>
            </div>
        </div>
        <div id="all-cards-root">
            {sortedCards.map((card)=>
                <div className="single-card" key={card.id} onClick={()=>clickHandler(card.id)}>
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