import './index.css';
import Nav from 'react-bootstrap/Nav';
import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from "../hooks/useAxiosPrivate";


function Login() {

    const LOGIN_URL = 'https://back-app-final-production.up.railway.app/auth';
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/views";
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosPrivate.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
            setSuccess(true);
        } catch (err) {
            console.log(user, pwd);
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing User or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                </section>
            ) : (
                <section className="h-100">
                    <div className="container h-100">
                        <div className="row justify-content-sm-center h-100">
                            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                                <div className="text-center my-5">
                                    <img src="../assets/media/favicon.jpg" alt="logo" width="72" height="57" />
                                </div>
                                <div className="card shadow-lg">
                                    <div className="card-body p-5">
                                        <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                                            {errMsg}
                                        </p>
                                        <form onSubmit={handleSubmit}  className="needs-validation" formNoValidate autoComplete="none" >

                                            <div className="mb-3">
                                                <label className="mb-2 text-muted" htmlFor="user">User</label>
                                                <input id="user" type="text" autoComplete="none" className="form-control" name="user" value={user} ref={userRef} onChange={(e) => setUser(e.target.value)} required />
                                            </div>

                                            <div className="mb-3">
                                                <div className="mb-2 w-100">
                                                    <label className="text-muted" htmlFor="password">Password</label>
                                                    <a href="./forgot" className="float-end">
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                                <input id="password" type="password" className="form-control" value={pwd} onChange={(e) => setPwd(e.target.value)} name="password" required />
                                                <div className="invalid-feedback">
                                                    Password is required
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <div className="form-check">
                                                    <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                                    <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                                </div>
                                                <button type="submit" className="btn btn-danger ms-auto">
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer py-3 border-0">
                                        <div className="text-center">
                                            Don't have an account? <span> <Nav.Link href="/signup" className="text-dark">Create One</Nav.Link></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5 text-muted">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Login;