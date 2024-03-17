import React, { useState } from 'react'
import "./Singup.css"
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SingupValidation'
import axios from 'axios'


function Signup() {
    const [values, setValues] = useState({
        name: '',
        name:'',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const [errors, setErrors]= useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                 navigate('/');
            })
            .catch(err => console.log(err));
        }

    }


  return (
    <div className='container2'>
        <div className='content2'>
        <h2 className='ti'>Sing-Up</h2>
            <form action="" onSubmit={handleSubmit}>

                <div className='bord11'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter Name' onChange={handleInput}/>
                    {errors.name && <span className='error2'>{errors.name}</span>}
                    
                </div>
                <div className='bord22'>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name='name' placeholder='Enter Last Name' onChange={handleInput}/>
                    {errors.name && <span className='error'>{errors.name}</span>}
                </div>
                <div className='bord33'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter Email' onChange={handleInput}/>
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>
                <div className='bord44'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter Password' onChange={handleInput}/>
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>

                <button type='submit' className='btn1'><strong>Sing up</strong></button>

                <p> You are agree to aour termes and policies</p>
                <Link to="/Login" className='btn2'>Login</Link>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
