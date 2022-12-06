import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
    const URLForgot = "https://back-app-final-production.up.railway.app/forgot";
/*     const URLForgot = "http://localhost:9000/forgot" */
    const [data, setData] = useState({
        email: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(URLForgot, {email: data.email})
            .then((res) => {
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'success',
                    text: 'Check your email, we have sent you instructions'
                })
            }).catch((err) => {
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'Error'
                })
            });
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }



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
                                <h1 className="fs-4 card-title fw-bold mb-4">Forgot Password</h1>
                                <form onSubmit={handleSubmit} className="needs-validation" >
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                        <input id="email" onChange={(e) => handle(e)} type="email" value={data.email} className="form-control" name="email" required />
                                        <div className="invalid-feedback">
                                            Email is invalid
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <button type="submit" className="btn btn-danger ms-auto">
                                            Send Link
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Remember your password? <Nav.Link href="/login" className="text-dark">Login</Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;