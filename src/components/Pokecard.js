import React from 'react';

const Pokecard = ({sprite, name, type}) => {
    return (
        <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='pokemon' src={`${sprite}`} height='200' width='250'/>
            <h2 className='near-black ttc'>{name}</h2>
            <p className='near-black ttc'>Type: {type}</p>

        </div>
    );
}

export default Pokecard;