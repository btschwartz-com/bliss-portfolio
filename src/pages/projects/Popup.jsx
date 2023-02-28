import React from 'react';
import Popup from 'reactjs-popup';

import './popup.css'

export const PopupExample =  () => (
    <Popup 
        trigger={<button className="button"> Open Modal </button>} 
        modal 
        nested
    >


        <span> Modal content </span>
    </Popup>
);


// https://react-popup.elazizi.com/react-modal/