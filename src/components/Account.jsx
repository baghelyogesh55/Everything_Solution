import React, { Component } from 'react';

class Account extends Component {
    state = { }
    render() { 
        return ( 
        <>
            <h1>{this.props.title}</h1> 
            <div className="social-container">
				<a href="#a" className="social"><i className="fab fa-google-plus-g"></i></a>
            </div>
            <span>{this.props.text}</span>
        </>
        );
    }
}
 
export default Account;