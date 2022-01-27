import React, { useState } from 'react';
import './Register.css'
import { NavLink } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState({
        isError: false,
        msg: '',
    });

    const auth = getAuth();


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMsg({ isError: false, msg: '' });
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user;
                console.log("Registered user: ", user.email);
                setEmail("");
                setPassword("");
                setconfirmPassword('');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("An error occured: ", errorCode, errorMessage);
                setErrorMsg({ isError: true, msg: errorCode });
            })
        } else {
            setErrorMsg({ isError: true, msg: "Confirm Password do not match" });

        }

    }

    return (
        <>
            <div className='container d-flex align-item-center justify-content-center'>
                <form className="row g-3 needs-validation register-form p-3" onSubmit={handleSubmit}>
                    {
                        errorMsg.isError &&
                        <>
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {errorMsg.msg}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </>
                    }
                    <div className='col-md-4 offset-md-4 '>
                        <h1 className='text-center'>Register</h1>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" required value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                    </div>
                    <div className='col-md-5 offset-md-4'>
                        <NavLink className="navlink" to="/login">Already register? Login here</NavLink>
                    </div>
                    <div className="col-sm-4 offset-md-4 d-flex align-item-center justify-content-center">
                        <button className="btn btn-primary" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
