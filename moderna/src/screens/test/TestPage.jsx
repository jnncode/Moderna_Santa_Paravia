import React, { Fragment } from 'react';

const TestPage = (props) => {
    return (
        <Fragment>
            <div className='header'>
                <div className='btn'>
                    <button className='action-btn' onClick={props.switchToStartPage}>Click Me</button>
                </div>
            </div>
        </Fragment>
   );
}
export default TestPage;