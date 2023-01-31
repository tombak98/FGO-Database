import React from "react";

const Skills = ({skillArray}) => {

    const [disp, setDisp] = React.useState(0)

    return (
        <div className="skills-container">
            <div className="skill-picker">
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
            <div className="skill-display"></div>
        </div>
    )
}

export default Skills