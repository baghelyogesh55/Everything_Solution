import React, { Component } from 'react';

class Overlay extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div className={"overlay-panel "+this.props.className}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.text}</p>
                    {this.props.children}
            </div>
            </>
        );
    }
}

export default Overlay;