import React, { Fragment } from 'react';
import { GameDataContext } from '../../context/GameDataContext.jsx';

const Loser = (props) => {

    return (
        <Fragment>
            <div className='header' id='loserHeader'>
                <h2>YOU LOSE</h2>
            </div>
        </Fragment>
    );
}

export default Loser;