import React, { Component } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/AuxWithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    // constructor(props) {
    //     super(props);
    //     this.inputElement = React.createRef();
    // }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.current.focus();
    }

    render() {
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    type='text'
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    // ref={this.inputElement}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux >
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    changed: PropTypes.func
}

export default WithClass(Person, classes.Person);
