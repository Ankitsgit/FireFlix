import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  return (
    <div className='login'>
        <img src={logo} alt="" className='login-logo ' />
        <div className="login-form">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Eamil' />
                <input type="password" placeholder='password' />
                <button>Sign Up</button>
                <div className="form-help">
                    <div className="remember">
                        <input type="checbox" />
                        <label htmlFor="">Remember Me </label>

                    </div>
                    <p>Need Help?</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
