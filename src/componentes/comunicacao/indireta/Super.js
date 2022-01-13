import React, {useState} from "react";
import Sub from "./Sub";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado) {
        setNum(valorGerado)
    }
    return (
        <div>
            <h4>Valor: 
                <hr/>{num}<hr/>
            </h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
        
    )
}