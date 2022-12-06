import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import Swal from 'sweetalert2';

function ResetPassword () {
    
    const URLreset = "https://back-app-final-production.up.railway.app/reset";
/*     const URLreset = "http://localhost:9000/reset"; */

    const navigate = useNavigate();
    const [isLoading, setIsLoading ] = useState("");
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const props  = useParams();
    const params = props.resetToken;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userPassword = e.target.password.value;

        console.log(userPassword);
        console.log(params);

        setIsLoading(true);

        await axios.post(URLreset, {params, userPassword}, {
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
            setIsError("Password incorrect");
        } else{
            setIsError("");
        }
    }

    const switchShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div onSubmit={handleSubmit}>
            <form action="">
                <h3>
                    New Pass
                </h3>
                <div>
                    <input type= {showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
                    <button onClick={switchShowPassword}> {showPassword ? "ocultar" : "mostrar" } </button>
                </div>
                <div>Confirmar contraseña:*</div>
                <input type="password" value={confirmPassword}  onChange={(e) => checkValidation(e)} name="confirmPassword" required />
                <div>{isError}</div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default ResetPassword;
