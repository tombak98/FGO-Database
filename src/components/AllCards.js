import React from "react";
import axios from "axios";

const AllCards = () => {
    const [cards, setCards] = React.useState([])

    React.useEffect(()=>{
        async function getCards() {
            const {data} = await axios.get('/api/cards/all')
            console.log(data)
            setCards(data)
        }
        getCards()
    },[])

    return (
        <>
        <div id="all-cards-root">
            {cards.map((card)=>
                <div className="single-card" key={card.id}>
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