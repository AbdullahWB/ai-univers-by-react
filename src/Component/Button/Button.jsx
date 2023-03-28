import React from 'react';

const Button = (props) => {
    const {children} = props
    return (
        <div>
            <button className="btn btn-primary 
             text-white mt-12 mb-12">{children}</button>
        </div>
    );
};

export default Button;