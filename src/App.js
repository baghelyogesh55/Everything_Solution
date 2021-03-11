import React, { Component } from 'react';

import Account from './components/Account';
import Overlay from './components/Overlay';


class App extends Component {
  state = {  }

  componentDidMount(){
    this.handleSignInTransition();
    this.handleSignUpTransition();
  }

  handleSignInTransition(){
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
  
  handleSignUpTransition(){
    const signUpButton = document.getElementById('signUp');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
  }


  render() { 
  return (
    <>
      <h2>Weekly Coding Challenge #1: Sign in/up Form</h2>
      <div className="container" id="container">

        <div className="form-container sign-up-container">
          <form action="#">
            <Account title={'Create Account'} text={'or use your email for registration'}/>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <Account title={'Sign in'} text={'or use your account'}/>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#a">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">

            <Overlay className={'overlay-left'} title={'Welcome Back!'} text={'To keep connected with us please login with your personal info'} >
              <button className="ghost" id="signIn" onClick={this.handleSignInTransition}>Sign In</button>
            </Overlay>

            <Overlay className={'overlay-right'} title={'Hello, Friend!'} text={'Enter your personal details and start journey with us'} >
              <button className="ghost" id="signUp" onClick={this.handleSignUpTransition}>Sign Up</button>
            </Overlay>
            
          </div>
        </div>

      </div>

      <footer>
	<p>
		Created with <i className="fa fa-heart"></i> by
		<a target="_blank" rel="noreferrer" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" rel="noreferrer" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
</footer>
    </>
  );
}



}

export default App;
