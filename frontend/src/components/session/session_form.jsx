import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this._autoInput = this._autoInput.bind(this);
    this.clearedErrors = false;
  }

  // not sure if necessary if using modals...
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/login');
  //   }

  //   this.setState({ errors: nextProps.errors })
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newUser = Object.assign({}, this.state);
    delete newUser['errors'];
    
    let existingUser = {
      email: this.state.email,
      password: this.state.password
    };

    let user = (this.props.formType === 'Sign up') ? newUser : existingUser;
    // this.props.processForm(newUser, this.props.history)
    this.props.processForm(user)
      .then(this.props.closeModal)
  }

  handleDemo(e) {
    e.preventDefault();

    let demoEmail = 'demo_user@whatnow.io';
    let demoPw = 'spontylife123';

    this._disableInputs();

    this.setState({ email: '', password: '' }, () =>
      this._autoInput('email', demoEmail, () =>
        this._autoInput('password', demoPw, () => {
          const demoUser = {
            email: this.state.email,
            password: this.state.password
          };
          this.props.processForm(demoUser).then(this.props.closeModal);
        })
      )
    )
  }

  _disableInputs() {
    document.getElementById('email').disabled = true;
    document.getElementById('password').disabled = true;
    document.getElementById('form-action').disabled = true;
    document.getElementById('demo-login').disabled = true;
  }

  _autoInput(field, text, callback) {
    const inputChars = text.split('');

    const _addChar = (chars) => {
      if (chars.length > 0) {
        let char = chars.shift();
        let currentInput = this.state[field];
        this.setState(
          { [field]: (currentInput + char) },
          () => setTimeout(() => { _addChar(chars) }, 50)
        )
      } else {
        callback()
      }
    }

    _addChar(inputChars);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  

  render() {
    const { formType, switchForm } = this.props;
    const sessionFormInputs = (
      <div className='session-form-text-inputs'>
        <label className='session-form-input-label'>Email
          <input type='text'
            className='session-form-input'
            id='email'
            value={this.state.email}
            onChange={this.update('email')}
          />
        </label>
        {formType === 'Sign up' ? (
        <div className='signup-form-additionals'>
          <label className='session-form-input-label'>Username
            <input type='text'
              className="session-form-input"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label className='session-form-input-label'>First name
            <input type='text'
              className="session-form-input"
              value={this.state.firstName}
              onChange={this.update('firstName')}
            />
          </label>
          <label className='session-form-input-label'>Last name
            <input type='text'
              className="session-form-input"
              value={this.state.lastName}
              onChange={this.update('lastName')}
            />
          </label>
        </div>
        ) : null}
        <label className='session-form-input-label'>Password
          <input type='password'
            className="session-form-input"
            id='password'
            value={this.state.password}
            onChange={this.update('password')}
          />
        </label>
        {formType === 'Sign up' ? (
        <div className='signup-form-additionals'>
          <label className='session-form-input-label'>Confirm password
            <input type='password'
              className="session-form-input"
              value={this.state.password2}
              onChange={this.update('password2')}
            />
          </label>
        </div>
        ) : null}
      </div>
    );

    const demoLogin = (formType === 'Sign up') ? null : (
      <input type='submit'
        className='session-form-button-input'
        id='demo-login'
        value='Demo Login'
        onClick={this.handleDemo}
      />
    );

    const switchFormLink = (
      
      <div className="switch-form-link" onClick={switchForm}>
        {formType === "Sign up" ?
        "Already have an account? Log in" :
        "Not on WhatNow yet? Sign up"}
      </div>
    );

    return (
      <div className='session-form-container'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <div className='session-form-icon-container'>
            <i className='fab fa-weebly' id='session-form-icon'></i>
          </div>
          <div className='session-form-title'>
            Welcome to WhatNow
          </div>
          <div className='session-form-inputs'>
            {sessionFormInputs}
            {this.renderErrors()}
            <input type='submit'
              className='session-form-button-input'
              id='form-action'
              value={formType}
            />
            {demoLogin}
            <div className='session-form-spacer'></div>
            {switchFormLink}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);