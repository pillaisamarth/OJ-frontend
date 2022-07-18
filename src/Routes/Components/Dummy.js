import React from 'react';
import { Outlet } from 'react-router';

function Dummy(props) {
    return (
        <div>
            Hello World!
        <Outlet />
        </div>
    );
}

export default Dummy;