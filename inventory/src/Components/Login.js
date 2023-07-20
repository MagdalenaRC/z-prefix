import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { AppContext } from '../App';
import { Button, OutlinedInput, FormControl, InputLabel, IconButton, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const clickShowPassword = () => setShowPassword((show) => !show);

    const navigate = useNavigate();

    const { isVerified, setIsVerified,
            user, setUser } = useContext(AppContext)

    const submitLogin = async e => {
        e.preventDefault();
        let inputUsername = document.getElementById('user_name').value;
        let inputPassword = document.getElementById('password').value;
        console.log(inputUsername);
        loginUser(inputUsername, inputPassword);
    }

    async function loginUser(username, password) {
        fetch('http://localhost:3001/login',{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"username":username, "password":password})
        })
            .then(res => res.json())
            .then(data => {
            console.log('data: ', data)
            setUser(Number(data[0].id));
            setIsVerified(true);
            navigate("/myitems")
            })
            .catch(err =>{
            document.getElementById("user_name").value='';
            document.getElementById("password").value='';
            navigate("/login")
            })
        }
          
    return(
        <Form>
            <h3>Please Sign In</h3>
            <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
            <InputLabel htmlFor="user_name">Username</InputLabel>
            <OutlinedInput
            id="user_name"
            startAdornment={
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            }
            label="Username"
            />
            </FormControl>
            <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'password' : 'text'}
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
            <Button variant="contained" type="submit" className='loginbutton' onClick = {submitLogin}>Sign In </Button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`