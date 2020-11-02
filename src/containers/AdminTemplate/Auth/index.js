import React, { Component } from 'react';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: '',
      matKhau: '',
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className='container'>
        <div className='col-md-6 mx-auto'>
          <h3>Authentication Page Login</h3>
          <form onSubmit={this.handleLogin}>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Username</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                name='taiKhoan'
                onChange={this.handleOnChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
                name='matKhau'
                onChange={this.handleOnChange}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
