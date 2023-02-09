import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Skills = () => {

    const [disp, setDisp] = React.useState(0)
    const [card, setCard] = React.useState({})
    const [skills, setSkills] = React.useState([])

    const params = useParams()

    React.useState(()=>{
        async function getCard() {
            const {data} = await axios.get(`/api/cards/${params.id}`)
            setCard(data)
            setSkills(data.skills.split('?'))
        }
        getCard()
    },[])

    return (
        <div className="skills-container">
            <div className="skill-picker">
                <p className={disp === 0 ? 'selected' : ''} onClick={()=>setDisp(0)}>1</p>
                <p className={disp === 1 ? 'selected' : ''} onClick={()=>setDisp(1)}>2</p>
                <p className={disp === 2 ? 'selected' : ''} onClick={()=>setDisp(2)}>3</p>
            </div>
            <div className="skill-display">
                <p className="skill-text">{skills[disp]}</p>
            </div>
        </div>
    )
}

export default Skills