import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleCard = () => {
    const [card, setCard] = React.useState({})

    const params = useParams()

    React.useState(()=>{
        async function getCard() {
            const {data} = await axios.get(`/api/cards/${params.id}`)
            setCard(data)
        }
        getCard()
    },[])

    let deck = []
    if (card.deck) {
        for (let i = 0; i < card.deck.length; i++) {
            if (card.deck[i] === 'B') {
                deck.push('https://gamepress.gg/grandorder/sites/grandorder/files/2019-05/CCBuster_0.png')
            } else if (card.deck[i] === 'A') {
                deck.push('https://grandorder.wiki/images/0/08/Command_Card_Arts.png')
            } else {
                deck.push('https://gamepress.gg/grandorder/sites/grandorder/files/2019-05/CCQuick.png')
            }
        }
    }

    console.log(deck)
    
    return (
        <>
        <div id="single-card-root">
            <div className="single-card" key={card?.id}>
                <img src={card?.img}></img>
                <p>{card?.name}</p>
                <p>Class: {card?.class}</p>
            </div>
            <div className="card-details">
                <div className="card-deck">
                    {deck?.map((card, idx) => 
                    <img key={idx} src={card}>
                    </img>
                    )}
                </div>
                <p>Atk: 4000</p>
                <p>HP: 5000</p>
            </div>
        </div>
        </>
    )
}

export default SingleCard