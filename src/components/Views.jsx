import { useState, useEffect, useContext } from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import AuthContext from "../context/AuthProvider";
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
import './boton.css';


function Views() {
    const title = "TABLE"
    const [contacts, setContacts] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
    const { setAuth } = useContext(AuthContext);

    const URLget = "https://back-app-final-production.up.railway.app/";
    const URLdel = "https://back-app-final-production.up.railway.app/delete";
    const URLup = "https://back-app-final-production.up.railway.app/update";
    const URLlogout = "https://back-app-final-production.up.railway.app/logout";
/* 
    const URLget = "http://localhost:9000/";
    const URLdel = "http://localhost:9000/delete";
    const URLup = "http://localhost:9000/update";
    const URLlogout = "http://localhost:9000/logout";
 */
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(URLget, {
                    signal: controller.signal
                });
                isMounted && setContacts(response.data.contact);
                console.log(response.data);
                console.log(contacts);

            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);


    const [data, setData] = useState({
        _id: "",
        firstName: "",
        email: "",
        lastName: ""
    })

    const [editModal, setCentredModal] = useState(false);

    const toggleShowEdit = () => {
        setCentredModal(!editModal);
    }

    const [deleteModal, setCentredModal1] = useState(false);
    const toggleShowDelete = () => setCentredModal1(!deleteModal);

    function submitDel(e) {
        e.preventDefault();
        axiosPrivate.post(URLdel, {
            _id: data._id
        })
            .then(res => {
                console.log(res.data);
                window.location.reload()
            })
    }

    function submitUpd(e) {
        e.preventDefault();
        axiosPrivate.post(URLup, {
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

    const logout = async () => {
        axiosPrivate.get(URLlogout, setAuth({}), navigate('/login'))
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
        <>
            <Container className="py-5">
                <hr />
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
                            {/*                         <th scope="col"> Country </th> */}
                            <th scope="col"> Message </th>
                            <th scope="col">Plan</th>
                        </tr>
                    </MDBTableHead>
                    {contacts.map((contact) => (
                        <MDBTableBody>
                            <tr>
                                <td>
                                    <option>{contact._id}</option>
                                </td>
                                <td>
                                    <option>{contact.firstName}</option>
                                </td>
                                <td>
                                    <option>{contact.lastName}</option>
                                </td>
                                <td>
                                    <option>{contact.email}</option>
                                </td>
                                {/*                             <td>
                                    <option>{contact.country}</option>
                                </td> */}
                                <td>
                                    <option>{contact.message}</option>
                                </td>
                                <td>
                                    <option>{contact.plan}</option>
                                </td>
                            </tr>
                        </MDBTableBody>
                    ))}
                </MDBTable>

                <div className="boton m-2 mt-4" >
                    <MDBBtn onClick={logout} color='danger' size='sm' className="d-block mr-0 ml-auto">
                        <i className='fas fa-times'>Logout</i>
                    </MDBBtn>
                </div>

                <MDBModal tabIndex='-1' className='modal' show={editModal} setShow={setCentredModal}>
                    <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Edit data</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShowEdit}></MDBBtn>
                            </MDBModalHeader>
                            <form onSubmit={(e) => submitUpd(e)} >
                                <MDBModalBody>
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} value={data.firstName} id="firstName" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name
                                            <span className="text-muted"></span></label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} value={data.lastName} id="lastName" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email
                                            <span className="text-muted"></span></label>
                                        <input type="email" className="form-control" onChange={(e) => handle(e)} value={data.email} id="email" placeholder={contacts.email} required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="_id" className="form-label">Select the correct ID to edit</label>
                                        <Form.Select onChange={(e) => handle(e)} id="_id" type="text" className="form-control" name="_id" placeholder="Please re-enter the ID to confirm" value={data._id} required>
                                            <option value="">Choose ...</option>
                                            {contacts.map((contact) => (
                                                <option>{contact._id}</option>
                                            ))}
                                        </Form.Select>
                                    </div>
                                </MDBModalBody>
                                <MDBModalFooter>
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
                                    Delete data
                                </MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShowDelete}></MDBBtn>
                            </MDBModalHeader>
                            <form onSubmit={(e) => submitDel(e)}>
                                <MDBModalBody>
                                    <strong>Please select the ID to remove</strong>
                                    <hr />
                                    <div className="mb-3">
                                        <label htmlFor="_id" className="form-label">Are you sure to delete?</label>
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
        </>
    );
}

export default Views;