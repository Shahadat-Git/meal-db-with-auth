import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { singInuser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location)
    const from = location.state?.from.pathname || '/';
    // console.log(from)

    const handleLogin = (event) => {
        event.preventDefault();
        setError('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)

        // validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password At least one uppercase character')
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Password At least one lowercase character')
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setError('Password At least one digit')
            return;
        }
        else if (password.length < 6) {
            setError('Password Minimum 6 characters')
            return;
        }

        singInuser(email, password)
            .then((result) => {
                console.log('successfully logged in')
                navigate(from)
            })
            .catch(error => {
                // console.log(error.message)
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    {
                        error && <p className='text-error mb-5'>{error}</p>
                    }
                    <h1 className="text-5xl font-bold">Please Login!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/forgotpassword' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <Link to='/register' className='label-text-alt link'>Don't have account ?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;