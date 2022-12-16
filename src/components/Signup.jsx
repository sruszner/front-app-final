import Nav from 'react-bootstrap/Nav';
import React, { useRef, useState, useEffect } from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import Swal from 'sweetalert2';

function Signup() {

    const URLsingUp_Prod = "https://back-app-final-production.up.railway.app/register";
    const URLsingUp = "http://localhost:9000/register";
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [isError, setIsError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const from = location.state?.from?.pathname || "/login";
    const [errMsg, setErrMsg] = useState('');
    const [isLoading, setIsLoading] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    let regExPassword = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axiosPrivate.post(URLsingUp_Prod,
                JSON.stringify({ user, pwd }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            ).then((res) => {
                setIsLoading(false)
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'success',
                    text: 'User created'
                })
                navigate('/login')
            }).catch((err) => {
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'Error'
                })
            });
            setAuth({ user, pwd });
            console.log(`User ${user} created!`);
            navigate(from, { replace: true });

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing User or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else if (err.response?.status === 409) {
                setErrMsg('User already exists');
            } else {
                setErrMsg('Sign Up Failed');
            }
            errRef.current.focus();
        }
    }

    const checkValidation = (e) => {
        const confirmPass = e.target.value;
        const regExConfirm = regExPassword.test(pwd);
        setConfirmPassword(confirmPass)

        console.log(regExConfirm);
        if (!regExConfirm !== 1) {

            if (pwd !== confirmPass) {
                setIsError("Passwords do not match");
                setIsLoading(true);
            } else {
                setIsError("");
                setIsLoading(false);
            }
        } else {
            setIsError("Password must contain minimum eight characters, at least one letter and one number");
            setIsLoading(true) 
        }
    }

    const switchShowPassword = () => {
        setShowPassword(!showPassword);
    }

    /* 
        else if (!regExPassword.test(pwd)) {
            setIsError("Password must contain minimum eight characters, at least one letter and one number");
            setIsLoading(true) */


    return (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="text-center my-5">
                            <img src="../assets/media/favicon.jpg" alt="logo" width="72" height="57" />
                        </div>
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                <form onSubmit={handleSubmit} className="needs-validation" noValidate="" autoComplete="off">

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="user">Email</label>
                                        <input id="user" value={user} ref={userRef} onChange={(e) => setUser(e.target.value)} type="email" className="form-control" name="user" required autoFocus />
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="pwd">Password</label>
                                        <input id="pwd" value={pwd} onChange={(e) => setPwd(e.target.value)} type={showPassword ? "text" : "password"} className="form-control" name="pwd" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="confirmPassword">Repeat password</label>
                                        <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => checkValidation(e)} name="confirmPassword" className="form-control" required />
                                    </div>

                                    <div className="text-danger ">{isError}</div>

                                    <p className="form-text text-muted mb-3">
                                        By registering you agree with our terms and condition.
                                    </p>

                                    <div className="align-items-center d-flex mb-3">
                                        <i className="ms-auto" onClick={switchShowPassword}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}</i>
                                    </div>
                                    <div className="align-items-center d-flex">
                                        {isLoading
                                            ?
                                            <button type="button" className="btn btn-success ms-auto">
                                                Register
                                            </button>
                                            :
                                            <button type="submit" className="btn btn-success ms-auto">
                                                Register
                                            </button>
                                        }
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Already have an account? <Nav.Link href="/login" className="text-dark">Login</Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;