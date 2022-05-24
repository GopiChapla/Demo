import React from "react";

const Comp=(props)=>{
    return <ul>
            <li>Tea</li>
            <li>Coffee</li>
            <li>Milk</li>
            <li>{props.name}</li>
            </ul>;
}

export default Comp;