import React, { useState } from "react";

function Lists(props) {
    const Lists = props.Todos;
    const [crossedOut, setCrossedOut] = useState([]);

    function crossOut(index) {
        setCrossedOut((prevCrossedOut) => {
            const newCrossedOut = [...prevCrossedOut];
            newCrossedOut[index] = true;
            return newCrossedOut;
        });
    }

    return (
        <ul>
            {Lists &&
                Lists.length > 0 &&
                Lists.map((item, index) => (
                    <li
                        style={{
                            textDecoration: crossedOut[index] ? "line-through" : "none"
                        }}
                        key={index}
                        onClick={() => crossOut(index)}
                    >
                        {item}
                    </li>
                ))}
        </ul>
    );
}

export default Lists;