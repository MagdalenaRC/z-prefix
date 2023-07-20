import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components';
import { Button, OutlinedInput, FormControl, InputLabel, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function CreateAccount() {
    const [showPassword, setShowPassword] = useState(false);
    const clickShowPassword = () => setShowPassword((show) => !show);
    const navigate = useNavigate();

     //using the asyc function with the data from the inputs 
     const submitCreateAccount = async e => {
        e.preventDefault();
        let inputFirstname = document.getElementById('firstname').value;
        let inputLastname = document.getElementById('lastname').value;
        let inputUsername = document.getElementById('username').value;
        let inputPassword = document.getElementById('password').value;
        alert('Account created, please login');
        createAccount(inputFirstname, inputLastname, inputUsername, inputPassword);
    }
    //asyc function to POST 
    async function createAccount( firstname, lastname, username, password ) {
        let newUserId
        fetch(`http://localhost:3001/createuser`,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"firstname": firstname, "lastname": lastname, "username": username, "password": password})
        })
        .then(response => response.json())
        .then(data=> {
            newUserId = data.id;
            console.log(newUserId);
            navigate(`/login`)
        })
        .catch(error => console.error('Error:', error));
    }

    return(
        <Form>
            <h2>Create Account</h2>
            <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
                <InputLabel htmlFor="firstname">First Name</InputLabel>
                <OutlinedInput id="firstname" label="ItemName"/> 
            </FormControl>
            <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                <OutlinedInput id="lastname" label="ItemName"/> 
            </FormControl>
            <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
                <InputLabel htmlFor="username">Username</InputLabel>
                <OutlinedInput id="username" label="ItemName"/> 
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput id="password" type={showPassword ? 'password' : 'text'}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={clickShowPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <Button variant="contained" type="submit" className='createAccountBtn' onClick = {submitCreateAccount}>Create Account</Button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 20px;
`