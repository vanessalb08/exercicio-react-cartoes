import React from "react";
import Filho from "./Filho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div>
        <Filho {...props}><strong>Vanessa</strong></Filho>
        <Filho sobrenome={props.sobrenome}><strong>Everton</strong></Filho>
        <Filho sobrenome="Lima"><strong>Letícia</strong></Filho>
    </div>