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
                <ButtonContainer>
                    <Button style={buttonStyle} variant="contained" onClick={()=>navigate("/")}>All Items</Button>
                    <Button style={buttonStyle} variant="contained" onClick={()=>navigate("/myitems")}>My Items</Button>
                    <Button style={buttonStyle} variant="contained" onClick={clickLogOut}>Log Out</Button>
                </ButtonContainer>
            </HeaderContainer>
            :
            <HeaderContainer>
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
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
`

const HeaderContainer = styled.div`
background-color: #8D56E7;
align-items: center;
padding: 25px 50px 75px 100px;
`