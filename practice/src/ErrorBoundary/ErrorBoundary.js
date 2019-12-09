import React, {Component} from 'react';

// Great to create error messages for component you KNOW can cause errors. Don't use it with all the components 

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (err, info) => {
        this.setState({hasError:true, errorMessage:err})
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;