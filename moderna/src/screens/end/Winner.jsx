import React, { Fragment } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const Winner = (props) => {

    return (
        <Fragment>
            <div className='header' id='loserHeader'>
                <h2>YOU WIN</h2>
            </div>
        </Fragment>
    );
}

export default Winner;