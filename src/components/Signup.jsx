import Nav from 'react-bootstrap/Nav';

function Signup() {
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
                                <form method="POST" className="needs-validation" novalidate="" autocomplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="email">Email Address</label>
                                        <input id="email" type="email" className="form-control" name="email" required
                                            autofocus />
                                        <div className="invalid-feedback">
                                            Email is invalid
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="firstName">Name</label>
                                        <input id="firstName" type="text" className="form-control" name="firstName" required />
                                        <div className="invalid-feedback">
                                            Name is required
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="pass">Password</label>
                                        <input id="pass" type="password" className="form-control" name="pass" required />
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>

                                    <p className="form-text text-muted mb-3">
                                        By registering you agree with our terms and condition.
                                    </p>

                                    <div className="align-items-center d-flex">
                                        <button type="button" className="btn btn-success ms-auto">
                                            Register
                                        </button>
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