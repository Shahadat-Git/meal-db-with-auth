import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const ForgotPassword = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { resetPassword } = useContext(AuthContext);


    const handleForgotPassword = (event) => {
        event.preventDefault();
        setError('')
        setSuccess('')

        const form = event.target;
        const email = form.email.value;

        // console.log(email)

        resetPassword(email)
            .then(() => {
                console.log('successfully reest link sended');
                setSuccess('Check your email for reset password')
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
                    {
                        success && <p className='text-success mb-5'>{success}</p>
                    }
                    <h1 className="text-5xl font-bold">Reset Your Passowrd!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForgotPassword} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset passowrd</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;