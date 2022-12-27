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
    
    return (
        <>
        <div id="single-card-root">
            <div className="single-card" key={card?.id}>
                <img src={card?.img}></img>
                <p>{card?.name}</p>
                <p>Class: {card?.class}</p>
            </div>
        </div>
        </>
    )
}

export default SingleCard