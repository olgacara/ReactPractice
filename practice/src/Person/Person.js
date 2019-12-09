import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const person = (props) => {

    const StyledDiv = styled.div`
        
    width: 50%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    @media (min-width: 500px){
        
        width: 450px;
       
    }
    `;
    
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return(
        //<div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    ) 
}

export default person;
// const per = function (){
    
// }
