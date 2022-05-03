import React, { Component } from 'react'
import CustomButton from '../customButton/customButton.component';
import FormInput from '../form-input/form-input.component'
import './signUp.style.scss'
import { auths, createUserProfileDocument } from '../../firebase/firebase.uitls';
import { createUserWithEmailAndPassword } from 'firebase/auth';
export class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
                displayName:'',
            email: "",
            password: "",
            confirmPassword:""
            
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault()
        const {displayName,email,password,confirmPassword}=this.state 


         if (password != confirmPassword)
        {  
            alert("passwords doesn't match");
            return
        }

        else {
            
            try {
                const { user } = await createUserWithEmailAndPassword(auths,this.state.email, this.state.password)
                
                const userRef = await createUserProfileDocument(user,{displayName},password)
                console.log(userRef)
                
            }
             
             
             catch (error) { console.log(error.message) }
             
            
        }

        this.setState(
            {    
            displayName:'',
            email: "",
            password: "",
            confirmPassword:""
            }
        )
        

        
    }



    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
        
        
    }


    render() {
     const {displayName,email,password,confirmPassword}=this.state 
     return (
        <div className='singUp'>
            <h2>I don't have an account  </h2>
            <span className='title'>Sign Up </span>
            
            <form onSubmit={this.handleSubmit}>

                 <FormInput
                    label='userName'
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={this.handleChange}
                    required />
                
                <FormInput
                    label='email'
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                    required />
                
                
                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                    required />
                
                
                 <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    required />


                <div className='buttons'>
                  
                  <CustomButton type="submit" >Sign Up</CustomButton>
                </div>
            </form>
        </div>
    )
  }
}

export default SignUp