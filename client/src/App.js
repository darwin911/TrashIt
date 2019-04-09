import React, { Component } from 'react';
import './App.css';
import {
  Navbar,
  Nav,
  Form,
  Button,
  //  ButtonGroup
} from 'react-bootstrap';
// import { Route } from 'react-router-dom';
import { createUser, loginUser } from './services/helper'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: 'test@test.com',
      password: 'test',
      picture: '',
      isLoggedIn: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }


  async handleLogin(e) {
    e.preventDefault();
    console.log('handleLogin called')
    const { email, password } = this.state
    const loginData = { email, password, }

    try {
      const user = await loginUser(loginData)
      this.setState({
        token: user,
        email: '',
        password: '',
        isLoggedIn: true,
      })
    } catch (error) {
      console.error("INVALID_CREDENTIALS", error)
    }

  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit Called')
    const { name, email, password, picture } = this.state;
    const registerData = { name, email, password, picture }
    const user = await createUser(registerData);

    this.setState({
      token: user
    })
  }

  handleLogout() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">TrashIt</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Bins</Nav.Link>
            {(this.state.isLoggedIn === false)
              ? <>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#register">Register</Nav.Link>
              </>
              : <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>}
          </Nav>
        </Navbar>
        <main>

          {
            !this.state.isLoggedIn &&
            <Form onSubmit={this.handleLogin}>
              <Form.Group controlId="email">
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} required />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} required />
              </Form.Group>
              <Button variant="primary" type="submit">Sign In</Button>
            </Form>
          }

        </main>
        <footer>
          &copy; Darwin Smith 2019
        </footer>
      </div>
    );
  }
}

export default App;
