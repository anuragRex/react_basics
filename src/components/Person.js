import React from 'react';

const person = props => {
    return (
        <div className="person">
            <h2>{props.name}</h2>
            <p>age : {props.age}</p>
            <p>{props.children}</p>
            <hr />
            <p>position : {props.position}</p>
        </div>
    );
}

export default person;