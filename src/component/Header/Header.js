import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
    return (
        <div className='mt-3'>
            <h1 className='text-center fw-bold text-primary display-3'>BOOK STORE</h1>
            <h3 className='text-center fw-bold text-success'>Choose Your Book</h3>
        </div>
    );
};

export default Header;