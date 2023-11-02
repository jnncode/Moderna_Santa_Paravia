import React, { Fragment } from 'react';

// React fragment
const InstructionsPage = (props) => {
    return (
        <Fragment>
            <div className='header'>
                <h1>Instructions</h1>
            </div>
            <div className='instructions'>
                <h4>1. Begin by managing resources - balance the city's finances, food supply, and population growth.
                    <br /><br />
                    2. Make strategic decisions - set taxes, build infrastructure, and trade resources.
                    <br /><br />
                    3. Navigate challenges - respond to events that impact the city's well-being.
                    <br /><br />
                    4. Aim for prosperity - the goal is to achieve economic growth and societal stability.
                </h4>
            </div>
            <div>
                <button className='instructions-btn' onClick={props.switchToMainMenuPage}>Next</button>
            </div>
        </Fragment>
    );
}
export default InstructionsPage;