import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'
import { Button } from '@mui/material';
import styled from 'styled-components';

export default function Header() {
    const { isVerified, setIsVerified, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    function clickLogOut() {
        setIsVerified(false);
        setUser('');
        navigate('/');
        alert('You are logged out');
    }

    const buttonStyle = {  
        height: "50px",
        width: "150px",
    }

    return (
        <>
        {isVerified ?
            <HeaderContainer>
                <img src='https://www.freeiconspng.com/thumbs/chemical-icon-png/chemical-icon-png-6.png'
                    alt="Chemistry Logo" width="82" height="100"/>
                <ButtonContainer>
                    <Button style={buttonStyle} variant="contained" onClick={()=>navigate("/")}>All Items</Button>
                    <Button style={buttonStyle} variant="contained" onClick={()=>navigate("/myitems")}>My Items</Button>
                    <Button style={buttonStyle} variant="contained" onClick={clickLogOut}>Log Out</Button>
                </ButtonContainer>
            </HeaderContainer>
            :
            <HeaderContainer>
                 <img src='https://www.freeiconspng.com/thumbs/chemical-icon-png/chemical-icon-png-6.png' 
                    alt="Chemistry Logo" width="82" height="100"/>
                <ButtonContainer>
                    <Button style={buttonStyle} variant="contained" onClick={()=>navigate("/")}>All Items</Button>
                    <Button style={buttonStyle} variant="contained" onClick={()=>navigate("/login")}>Log In</Button>
                </ButtonContainer>
            </HeaderContainer>
        }
        </>
    )
}

const ButtonContainer = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: flex-end;
flex-wrap: nowrap;
gap: 8em;
`

const HeaderContainer = styled.div`
background-image: url("https://image.shutterstock.com/image-illustration/2d-illustration-medical-structure-background-260nw-1701258115.jpg");
background-size: 100%;
background-repeat: no-repeat;
background-position: center;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 25px 50px 75px 100px;
`