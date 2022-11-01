import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

function Contact() {

    const URL = "https://back-app-final.herokuapp.com/create";

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        address: "",
        country: "",
        zip: "",
        plan: "",
        message: "",
        metOn: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(URL, {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            address: data.address,
            country: data.country,
            zip: data.zip,
            plan: data.plan,
            message: data.message,
            metOn: data.metOn
        })
            .then(res => {
                console.log(res.data);
                window.location.reload()
            })
    }


    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }


    return (
        <section className="container-lg">
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src="../../assets/media/favicon.jpg" alt="" width="72" height="57" />
                <h2>Contact Us</h2>
                <p className="lead">Contact us to receive information about the circuit,
                    go-karts or even book in our hotel or restaurant. Don't forget to
                    subscribe to our newsletter !!</p>
            </div>

            <div className="row g-5">
                <div className="col-md-7 col-lg-8 container-lg">
                    <h4 className="mb-3">Contact form</h4>
                    <form onSubmit={(e) => submit(e)} className="needs-validation" id="form" novalidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label for="firstName" className="form-label">First name</label>
                                <input onChange={(e) => handle(e)} id="firstName" type="text" className="form-control" name="firstName" placeholder="" value={data.firstName} required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label for="lastName" className="form-label">Last name</label>
                                <input onChange={(e) => handle(e)} id="lastName" type="text" className="form-control" name="lastName" placeholder="" value={data.lastName} required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="username" className="form-label">Username</label>
                                <span className="text-muted"></span>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" onChange={(e) => handle(e)} id="username" className="form-control" name="username" placeholder="Username" value={data.username} required />
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="email" className="form-label">Email
                                    <span className="text-muted"></span></label>
                                <input type="email" onChange={(e) => handle(e)} id="email" className="form-control" name="email" placeholder="you@example.com" value={data.email} required />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address" className="form-label">Address</label>
                                <input type="text" onChange={(e) => handle(e)} id="address" className="form-control" name="address" placeholder="1234 Main St" value={data.address} required />
                                <div className="invalid-feedback">
                                    Please enter your address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address2" className="form-label">Address 2
                                    <span className="text-muted">(Optional)</span></label>
                                <input type="text" id="address2" className="form-control" name="address2" placeholder="Apartment or suite" />
                            </div>

                            <div className="col-md-5">
                                <label for="country" className="form-label">Country</label>
                                <Form.Select className="form-select" onChange={(e) => handle(e)} id="country" name="country" value={data.country} required>
                                    <option value="">Choose...</option>
                                    <option>Argentina</option>
                                    <option>Belgium</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>United States</option>
                                </Form.Select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label for="state" className="form-label">State</label>
                                <Form.Select className="form-select" name="state" required>
                                    <option value="">Choose...</option>
                                    <option>Buenos Aires</option>
                                    <option>Brussels</option>
                                    <option>Paris</option>
                                    <option>Berlin</option>
                                    <option>California</option>
                                </Form.Select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="zip" className="form-label">Zip</label>
                                <input type="number" onChange={(e) => handle(e)} id="zip" className="form-control" value={data.zip} name="zip" placeholder="" required />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>


                            <div className="col-md-5">
                                <label for="plan" className="form-label">Plan</label>
                                <Form.Select className="form-select" onChange={(e) => handle(e)} id="plan" value={data.plan} name="plan" required>
                                    <option value="">Choose...</option>
                                    <option value="Free">Free</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Premium D+">Premium D+</option>
                                    <option value="Cancel my plan">Cancel my plan</option>
                                </Form.Select>
                                <div className="invalid-feedback">
                                    Please select a valid option.
                                </div>
                            </div>

                        </div>

                        <div className="col-12 p-4">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" onChange={(e) => handle(e)} name="message" value={data.message} id="message" placeholder="Your message" rows="6"
                                required></textarea>
                            <div className="invalid-feedback">
                                Please enter your message.
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="form-check visually-hidden">
                            <input type="checkbox" className="form-check-input" name="dataStorage" value="Yes" checked />
                            <label className="form-check-label" for="dataStorage">I agree to the
                                storage of my data
                            </label>
                        </div>

                        <div className="form-check visually-hidden">
                            <input type="checkbox" className="form-check-input" name="beContacted" value="Yes" checked />
                            <label className="form-check-label" for="beContacted">I agree to be
                                contacted for news or promotions.</label>
                        </div>

                        <h4 className="mb-3">Where you met us?</h4>

                        <div className="my-3">
                            <div class="form-check">
                                <input id="metOn" name="metOn" onChange={(e) => handle(e)} value="TV" type="radio" className="form-check-input"  required />
                                <label htmlFor="tv" className="form-check-label">TV      </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" onChange={(e) => handle(e)} value="Social Media" id="metOn" name="metOn" className="form-check-input" required />
                                <label htmlFor="socialmedia" className="form-check-label">Social Media</label>
                            </div>
                            <div className="form-check">
                                <input id="metOn" name="metOn" type="radio" onChange={(e) => handle(e)} value="Others" className="form-check-input" required />
                                <label htmlFor="other" className="form-check-label" >Other   </label>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <input type="submit" className="w-20 btn btn-danger btn-lg" value="Send Form" />
                        <p className="form-text text-muted mt-3">
                            * By contacting us, you agree with our terms and condition.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;