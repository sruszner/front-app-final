import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import {
    MDBBtn,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit';


function Views() {

    const title = "TABLE"
    const URLget = "https://back-app-final.herokuapp.com/";
    const URLdel = "https://back-app-final.herokuapp.com/delete";
    const URLup = "https://back-app-final.herokuapp.com/update"; 

/*     const URLget = "http://localhost:9000/";
    const URLdel = "http://localhost:9000/delete";
    const URLup = "http://localhost:9000/update"; */

    const [editModal, setCentredModal] = useState(false);
    const toggleShowEdit = () => {
        setCentredModal(!editModal);
    }

    const [deleteModal, setCentredModal1] = useState(false);
    const toggleShowDelete = () => setCentredModal1(!deleteModal);

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get(URLget).then((response) => {
            setContacts(response.data.contact);
            console.log(response.data.contact);
        });
    }, []);


    const [data, setData] = useState({
        _id: "",
        firstName: "",
        email: "",
        lastName: ""
    })

    function submitDel(e) {
        e.preventDefault();
        axios.post(URLdel, {
            _id: data._id
        })
            .then(res => {
                console.log(res.data);
                window.location.reload()
            })
    }

    function submitUpd(e) {
        e.preventDefault();
        axios.post(URLup, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            _id: data._id
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

/*     function close(e) {
        window.location.reload();
    } */

    return (
        <Container className="py-5">

            <hr className="" />
            <h1 className="text-center"> {title} </h1>
            <hr />
            <div className="m-2">
                <MDBBtn color='danger' size='sm' className="m-1" onClick={toggleShowEdit}>
                    <i className='fas fa-times'>Edit</i>
                </MDBBtn>
                <MDBBtn color='danger' size='sm' className="m-1" onClick={toggleShowDelete}>
                    <i className='fas fa-times'>Delete</i>
                </MDBBtn>
            </div>

            <MDBTable striped hover bordered small align="middle" responsive className="text-center text-uppercase">
                <MDBTableHead dark className="">
                    <tr>
                        <th scope="col"> Id </th>
                        <th scope="col"> Name </th>
                        <th scope="col"> Surname </th>
                        <th scope="col"> Email </th>
                        <th scope="col"> Country </th>
                        <th scope="col"> Message </th>
                        <th scope="col">Plan</th>
                    </tr>
                </MDBTableHead>
                {contacts.map((contact) => (
                    <MDBTableBody>
                        <tr className="">
                            <td>{contact._id}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.country}</td>
                            <td>{contact.message}</td>
                            <td>{contact.plan}</td>

                        </tr>
                    </MDBTableBody>
                ))}
            </MDBTable>


            <MDBModal tabIndex='-1' className='modal' show={editModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Edit data</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShowEdit}></MDBBtn>
                        </MDBModalHeader>
                        <form onSubmit={(e) => submitUpd(e)} >
                            <MDBModalBody>
                                <div class="mb-3">
                                    <label for="firstName" class="form-label">First name</label>
                                    <input type="text" className="form-control" onChange={(e) => handle(e)} value={data.firstName} id="firstName" required />
                                </div>
                                <div class="mb-3">
                                    <label for="lastName" class="form-label">Last Name
                                        <span class="text-muted"></span></label>
                                    <input type="text" className="form-control" onChange={(e) => handle(e)} value={data.lastName} id="lastName" required />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email
                                        <span class="text-muted"></span></label>
                                    <input type="email" className="form-control" onChange={(e) => handle(e)} value={data.email} id="email" placeholder={contacts.email} required />
                                </div>

                                <div class="mb-3">
                                    <label for="_id" class="form-label">Select the correct ID to edit</label>
                                    <Form.Select onChange={(e) => handle(e)} id="_id" type="text" className="form-control" name="_id" placeholder="Please re-enter the ID to confirm" value={data._id} required>
                                        <option value="">Choose ...</option>
                                        {contacts.map((contact) => (
                                            <option>{contact._id}</option>
                                        ))}
                                    </Form.Select>
                                </div>
                            </MDBModalBody>
                            <MDBModalFooter>
{/*                                 <button className='btn btn-danger'onClick={(e) => close(e)} >
                                    Cancel
                                </button> */}
                                <MDBBtn color='success' type='submit' onClick={toggleShowEdit}>
                                    Update
                                </MDBBtn>
                            </MDBModalFooter>
                        </form>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>


            <MDBModal tabIndex='-1' show={deleteModal} setShow={setCentredModal1}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                <h5>Delete data</h5>
                            </MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShowDelete}></MDBBtn>
                        </MDBModalHeader>
                        <form onSubmit={(e) => submitDel(e)}>
                            <MDBModalBody>
                                <strong>Please select the ID to remove</strong>
                                <hr />
                                <div class="mb-3">
                                    <label for="_id" class="form-label">Are you sure to delete?</label>
                                    <Form.Select onChange={(e) => handle(e)} id="_id" type="text" className="form-control " name="_id" value={data._id} required >
                                        <option value="">Choose ...</option>
                                        {contacts.map((contact) => (
                                            <option>{contact._id}</option>
                                        ))}
                                    </Form.Select>
                                </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color='danger' type='submit' onClick={toggleShowDelete}>Delete</MDBBtn>
                            </MDBModalFooter>
                        </form>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </Container >
    );
}

export default Views;