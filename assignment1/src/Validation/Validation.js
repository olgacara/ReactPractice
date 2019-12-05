import React from 'react';

const validation = (prop) => {
    
    let shortOrLong = null;
    
    if(prop.length < 5 ){
        shortOrLong = "too short";
    } else shortOrLong = "long enough";

    return(
        <p>Text {shortOrLong} </p>
    )
}

export default validation;