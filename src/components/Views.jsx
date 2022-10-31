import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    const URLget = "http://localhost:9000/";
    const URLdel = "http://localhost:9000/delete";
    const URLup = "http://localhost:9000/update";

    const [editModal, setCentredModal] = useState(false);
    const toggleShowEdit = () => setCentredModal(!editModal);

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


    return (
        <Container className="py-5">

            <hr className="" />
            <h1 className="text-center"> {title} </h1>
            <hr />

            <MDBTable striped hover bordered small align="middle" responsive className="text-center text-uppercase">
                <MDBTableHead dark className="">
                    <tr>
                        <th scope="col"> Id </th>
                        <th scope="col"> Name </th>
                        <th scope="col"> Last Name </th>
                        <th scope="col"> Email </th>
                        <th scope="col"> Country </th>
                        <th scope="col"> Zip </th>
                        <th scope="col"> Message </th>
                        <th scope="col">Actions</th>
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
                            <td>{contact.zip}</td>
                            <td>{contact.message}</td>
                            <td>
                                <MDBBtn color='danger' size='sm' className="m-1" onClick={toggleShowEdit}>
                                    <i className='fas fa-times'>Edit</i>
                                </MDBBtn>
                                <MDBBtn color='danger' size='sm' className="m-1" onClick={toggleShowDelete}>
                                    <i className='fas fa-times'>Delete</i>
                                </MDBBtn>
                            </td>
                        </tr>
                    </MDBTableBody>
                ))}
            </MDBTable>

            <form onSubmit={(e) => submitUpd(e)} id="form" >
                <MDBModal tabIndex='-1' show={editModal} setShow={setCentredModal}>
                    <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Edit data</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShowEdit}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <div class="mb-3">
                                    <label for="firstName" class="form-label">First name</label>
                                    <input type="text" className="form-control" onChange={(e) => handle(e)} value={data.firstName} id="firstName" required />
                                </div>
                                <div class="mb-3">
                                    <label for="lastName" class="form-label">Last Name
                                        <span class="text-muted"></span></label>
                                    <input type="text" className="form-control"  onChange={(e) => handle(e)} value={data.lastName} id="lastName" required />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email
                                        <span class="text-muted"></span></label>
                                    <input type="email" className="form-control"  onChange={(e) => handle(e)} value={data.email} id="email" required />
                                </div>

                                <div class="mb-3">
                                    <label for="_id" class="form-label"></label>
                                    <input onChange={(e) => handle(e)} id="_id" type="text" className="form-control" name="_id" placeholder="Please re-enter the ID to confirm" value={data._id} required />
                                </div>

                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color='danger' onClick={toggleShowEdit}>
                                    Cancel
                                </MDBBtn>
                                <MDBBtn color='success' type='submit' onClick={toggleShowEdit}>
                                    Update
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </form>

            <form onSubmit={(e) => submitDel(e)}>
                <MDBModal tabIndex='-1' show={deleteModal} setShow={setCentredModal1}>
                    <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>
                                    <h5>Delete data</h5>
                                </MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShowDelete}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <strong>Are you sure to delete?</strong>
                                <hr />
                                <div class="mb-3">
                                    <label for="_id" class="form-label">Please re-enter the ID to remove</label>
                                    <input onChange={(e) => handle(e)} id="_id" type="text" className="form-control" name="_id" value={data._id} required />
                                </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color='danger' type='submit' onClick={toggleShowDelete}>Delete</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </form> 

        </Container >
    );
}

export default Views;