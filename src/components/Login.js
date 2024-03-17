import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors]= useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

    }



  return (
    <div className='container'>
        <div className='content'>
            <h2 className='to'>Sing-In</h2>
            <form action="" onSubmit={handleSubmit}>

                <div className='bord1'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email' name='email' onChange={handleInput}/>
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>
                <div className='bord2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' name='password' onChange={handleInput}/>
                    {errors.password && <span className='error'>{errors.password}</span>}
                </div>

                <button type='submit' className='btn1'><strong>Login</strong></button>

                <p> You are agree to aour termes and policies</p>
               <Link to="/Singup" className='btn2'>Create Account</Link>

            </form>
        </div>
      
    </div>
  )
}

export default Login
