import React from 'react';
import Mezo from './Mezo';

export default function Jatekter(props) {
    return(
        <React.Fragment>
            {props.lista.map((elem, index) => {
                return(<Mezo mezo={elem} key={index}/>)
            })}
            <p>Szia!</p>
        </React.Fragment>
    )
}