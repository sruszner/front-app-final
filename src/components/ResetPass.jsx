import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";


function ResetPassword() {

    const URLreset_Prod = "https://back-app-final-production.up.railway.app/reset"; 
    const URLreset = "http://localhost:9000/reset";

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState("");
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const props = useParams();
    const params = props.resetToken;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userPassword = e.target.password.value;

        console.log(userPassword);
        console.log(params);

        setIsLoading(true);

        await axios.post(URLreset_Prod, { params, userPassword }, {
            where: {
                resetToken: params
            }
        })
            .then((res) => {
                setIsLoading(false)
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'success',
                    text: 'Pass updated'
                })
                navigate('/login')
            }).catch((err) => {
                Swal.fire({
                    showConfirmButton: true,
                    icon: 'error',
                    text: 'Error'
                })
            });
    }

    const checkValidation = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass)
        if (password !== confirmPass) {
            setIsError("Passwords do not match");
            setIsLoading(true)
        } else {
            setIsError("");
            setIsLoading(false)
        }
    }

    const switchShowPassword = () => {
        setShowPassword(!showPassword);
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
                                <h1 className="fs-4 card-title fw-bold mb-4">Reset password</h1>
                                <form onSubmit={handleSubmit} className="needs-validation" formNoValidate autoautoComplete="none">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="password">Password</label>
                                        <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" className="form-control" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="confirmPassword">Repeat password</label>
                                        <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => checkValidation(e)} name="confirmPassword" className="form-control" required />
                                    </div>
                                    <div className="text-danger ">{isError}</div>
                                    <div className="align-items-center d-flex mb-3">
                                        <i className="ms-auto" onClick={switchShowPassword}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}</i>
                                    </div>
                                    <div className="align-items-center d-flex">
                                        {isLoading
                                            ?
                                            <button type="button" className="btn btn-success ms-auto">
                                                Confirm
                                            </button>
                                            :
                                            <button type="submit" className="btn btn-success ms-auto">
                                                Confirm
                                            </button>
                                        }
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer py-3 border-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResetPassword;
