import React from "react";

const Container = (props) => {
    return (
        <div className='container'>
            {props.screens}
            {props.children}
        </div>
    )
};
export default Container;