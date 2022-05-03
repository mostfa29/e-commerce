import React, { Component } from 'react'
import CustomButton from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component'
import './signIn.style.scss'
import { googleAuth } from '../../firebase/firebase.uitls';
export class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: "",
            password:""
        }
    }
    
    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
        

        
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({[name]:value})
    }
    googleAuth = () => {
        googleAuth()
    }

  render() {
    return (
        <div className='singIn'>
            <h2>I already have an account  </h2>
            <span className='title'>Sign in with your email </span>
            
            <form onSubmit={this.handleSubmit}>

                <FormInput
                    label='email'
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required />
                
                
                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required />


                <div className='buttons'>
                  <CustomButton type='submit' >Sign In </CustomButton>
                  <CustomButton onClick={this.googleAuth}  isGoogle >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
  }
}

export default SignIn