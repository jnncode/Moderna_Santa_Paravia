import React, { Fragment } from 'react';

// React fragment
const Instructions = (props) => {
    return (
        <Fragment>
            <div className='header' id='instructionsHeader'>
                <h2>Instructions</h2>
            </div>
            <div className='instructions'>
                <h4>
                    1. Begin by managing resources - balance the city's finances, food supply, and population growth.
                    <br /><br />
                    2. Make strategic decisions - set taxes, build infrastructure, and trade resources.
                    <br /><br />
                    3. Navigate challenges - respond to events that impact the city's well-being.
                    <br /><br />
                    4. Aim for prosperity - the goal is to achieve economic growth and societal stability.
                </h4>
            </div>
            <div>
                <button className='btn' id='i-cont' onClick={props.switchToMainMenuPage}>Next</button>
            </div>
        </Fragment>
    );
}
export default Instructions;