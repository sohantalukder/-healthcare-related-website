
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { signInUsingGoogle } = useAuth();


    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, pass);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPass(e.target.value);

    }

    return (
        <div className='login-form m-5'>

            <form onSubmit={handleRegistration}>
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" onBlur={handleEmailChange} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2  label-item">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" for="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>

            <br />
            <br />
            <p>new to 24hr center? <Link to='/register'>Craete Account</Link></p>
            <div>--------or--------</div>
            <button onClick={signInUsingGoogle} className='design-btn'>Google SignIn</button>


        </div>
    );
};

export default Login;