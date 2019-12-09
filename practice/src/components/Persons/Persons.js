import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((el, index) => {
    return <Person
        click={props.clicked}
        name={el.name}
        age={el.age}
        changed={(event) => props.changed(event, el.id)}
        key={el.id} />
}
);

export default persons;