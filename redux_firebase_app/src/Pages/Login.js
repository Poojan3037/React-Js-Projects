import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState({
        isError: false,
        msg: '',
    });

    const auth = getAuth();
    const navigation = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMsg({ isError: false, msg: '' });
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            navigation('/home');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("An error occured: ", errorCode, errorMessage);
            setErrorMsg({ isError: true, msg: errorCode });
        })
    }

    return (
        <>
            <div className='container d-flex align-item-center justify-content-center' >
                <form className="row g-3 needs-validation register-form p-3" onSubmit={handleLogin}>
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
                        <h1 className='text-center'>Login</h1>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='col-md-4 offset-md-4'>
                        <NavLink className="navlink" to="/">New User ? sign up here</NavLink>
                    </div>
                    <div className="col-sm-4 offset-md-4 d-flex align-item-center justify-content-center">
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
