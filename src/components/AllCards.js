import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// this components shows all cards

const AllCards = () => {
    const [cards, setCards] = React.useState([])

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

    return (
        <>
        <div id="all-cards-root">
            {cards.map((card)=>
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