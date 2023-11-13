import React, { Fragment } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const Level = (props) => {

    return (
        <Fragment>
            <div className='header' id='loserHeader'>
                <h2>YOU LEVELED UP</h2>
            </div>
        </Fragment>
    );
}

export default Level;