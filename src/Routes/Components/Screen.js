import React from 'react';
import '../../css/style.css'

function Screen(props) {
    return (
        <div className='fill-window'>
            {props.children}
        </div>
    );
}



export default Screen;