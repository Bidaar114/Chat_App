import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {

    const navigate = useNavigate()

    const [err, setErr] = useState(false)
    
      const handleSubmit = async (e) =>{
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;
       
        
     
     try{
       await signInWithEmailAndPassword(auth, email, password)

        navigate('/')

        }catch(err){
          setErr(true)
        }
    
      }
    return (
      <div className='formContainer'>
          <div className='formWraper' >
              <span className='logo'>Ibraa Chat</span>
              <span className='title'>Register</span>
              <form onSubmit={handleSubmit}>
                  <input type='email' placeholder='email'/>
                  <input type='password' placeholder='password'/>
                  <button>Sign in</button>
                  {err && <span>Somthing went wrong</span>}
              </form>
              <p> you do't have an account?<Link to='/register'> Register</Link></p>
  
          </div>
  
      </div>
    )
  }
  
  export default Login