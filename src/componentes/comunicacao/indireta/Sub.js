import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    

    return (
        <div>
        <button onClick={() => {
            props.onClicar(Math.random()*100)
        }}>Novo número</button>
        </div>
    )
}
    
