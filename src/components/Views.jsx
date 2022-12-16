import { useState, useEffect, useContext } from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
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

    const URLget_Prod = "https://back-app-final-production.up.railway.app";
    const URLdel_Prod = "https://back-app-final-production.up.railway.app/delete";
    const URLup_Prod = "https://back-app-final-production.up.railway.app/update";
    const URLlogout_Prod = "https://back-app-final-production.up.railway.app/logout";

    const URLget = "http://localhost:9000/";
    const URLdel = "http://localhost:9000/delete";
    const URLup = "http://localhost:9000/update";
    const URLlogout = "http://localhost:9000/logout";

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(URLget_Prod, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    signal: controller.signal
                });
                isMounted && setContacts(response.data.contact);
                console.log(response.data);

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

    const [datosModal, setDatosModal] = useState({
        _id: "",
        firstName: "",
        email: "",
        lastName: ""
    })


    const [editModal, setCentredModal] = useState(false);

    const toggleShowEdit = (contact) => {
        let newdatosModal = { ...contact };
        setDatosModal(newdatosModal);
        setCentredModal(!editModal);
    }

    const toggleShowEditCancel = () => {
        setCentredModal(!editModal);
        window.location.reload()
    }

    const [deleteModal, setCentredModal1] = useState(false);

    const toggleShowDelete = (contact) => {
        let newdatosModal = { ...contact };
        setDatosModal(newdatosModal);
        setCentredModal1(!deleteModal);
    }

    const toggleShowDeleteCancel = () => {
        setCentredModal1(!deleteModal);
        window.location.reload()
    }

    function submitDel(e) {
        e.preventDefault();

        axiosPrivate.post(URLdel_Prod, {
            _id: data._id
        })
            .then(res => {
                console.log(res.data);
                window.location.reload()
            })
    }

    function submitUpd(e) {
        e.preventDefault();

        axiosPrivate.post(URLup_Prod, {
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
        axiosPrivate.get(URLlogout_Prod, setAuth({}), navigate('/login'))
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        newdata._id = datosModal._id;
        setData(newdata);
        console.log(newdata);
    }


    return (
        <>
            <Container className="py-5">
                <hr />
                <h1 className="text-center"> {title} </h1>
                <hr />

                <MDBTable striped hover bordered small align="middle" responsive className="text-center text-uppercase">
                    <MDBTableHead dark className="">
                        <tr>
                            <th scope="col"> Id </th>
                            <th scope="col"> Name </th>
                            <th scope="col"> Surname </th>
                            <th scope="col"> Email </th>
                            <th scope="col"> Message </th>
                            <th scope="col">Plan</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </MDBTableHead>
                    {contacts.map((contact, i) => (
                        <MDBTableBody key={i}>
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
                                <td>
                                    <option>{contact.message}</option>
                                </td>
                                <td>
                                    <option>{contact.plan}</option>
                                </td>
                                <td>
                                    <MDBBtn color='danger' size='sm' className="m-1" onClick={() => toggleShowEdit(contact)}>
                                        <i className='fas fa-times'>Edit</i>
                                    </MDBBtn>
                                    <MDBBtn color='danger' size='sm' className="m-1" onClick={() => toggleShowDelete(contact)}>
                                        <i className='fas fa-times'>Delete</i>
                                    </MDBBtn>
                                </td>
                            </tr>
                        </MDBTableBody>
                    ))}
                </MDBTable>

                <div className="boton m-2 mt-4" >
                    <MDBBtn onClick={logout} color='danger' size='sm' className="d-block ml-auto">
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
                                        <label htmlFor="firstName" className="form-label" >First Name</label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} value={data.firstName} id="firstName" placeholder={datosModal.firstName} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name
                                            <span className="text-muted"></span></label>
                                        <input type="text" className="form-control" onChange={(e) => handle(e)} value={data.lastName} id="lastName" placeholder={datosModal.lastName} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email
                                            <span className="text-muted"></span></label>
                                        <input type="email" className="form-control" onChange={(e) => handle(e)} value={data.email} id="email" placeholder={datosModal.email} required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="_id" className="form-label">Selected ID to edit</label>
                                        <input onChange={(e) => handle(e)} id="_id" className="form-control" name="_id" value={data._id} placeholder={datosModal._id} disabled />
                                    </div>
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <MDBBtn color='danger' type='button' onClick={() => toggleShowEditCancel()}>Cancel</MDBBtn>
                                    <MDBBtn color='success' type='submit' onClick={() => toggleShowEdit(datosModal)}>
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
                                    <strong>Are you sure to delete?</strong>
                                    <div className="mt-3 mb-5">
                                        <input onChange={(e) => handle(e)} id="_id" className="form-control" name="_id" value={data._id} placeholder={datosModal._id} disabled />
                                    </div>
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <MDBBtn color='danger' type='button' onClick={toggleShowDeleteCancel}>Cancel</MDBBtn>
                                    <MDBBtn color='primary' type='submit' onClick={toggleShowDelete} onMouseOver={(e) => handle(e)}>Delete</MDBBtn>
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