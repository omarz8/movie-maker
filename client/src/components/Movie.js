import React from 'react'
//import matrix from "../img/matrix.jpg"

export default function Movie(props) {
    //const foto= matrix;
    return (
        <div className="card">
            <div className="container">
                <img src= "../img/matrix.jpg" alt="matrix" width="100%" height="230px" />
                <h3>{props.name}</h3>
                <h4>{props.genre} - {props.year} </h4>

            </div>
        </div>
    )
}
