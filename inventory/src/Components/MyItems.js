import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

//FORMATING IMPORTS//
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { Button } from '@mui/material';

export default function MyItems() {
    const { user } = useContext(AppContext);
    const [ myData, setMyData ] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
      
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/myitems/${user}`)
        .then(res => res.json())
        .then(data => setMyData(data))
    })

    async function deleteItem( itemId ) {
        fetch(`http://localhost:3001/myitems/${itemId}`,{
            method:"DELETE",
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data=> console.log(data.message))
        .catch(error => console.error('Error:', error));
    }

    return(
        <>
        <ContainerDiv>
            <Button variant="contained" className='addItemBtn' onClick={() => navigate('/additem')}> Add Item </Button>
            <DetailsContainer style={selectedItem ? { backgroundColor: "#9F6DF0" } : {}}>
                <h3>{selectedItem?.itemname}</h3>
                {selectedItem?.description !== undefined && <p>Description: {selectedItem?.description}</p>}
                {selectedItem?.quantity !== undefined && <p>Quantity: {selectedItem?.quantity}</p>}
            </DetailsContainer>
            
            <ItemsWrapper>
                {myData.length === 0 ? "No items in inventory" :
                myData.map((item, index) => (
                <ItemContainer>
                    <IconContainer>
                        <EditIcon  className='editBtn' onClick={() => navigate('/edititem', 
                            {state:{ itemId: item.id, itemname: item.itemname, description: item.description, quantity: item.quantity}})}></EditIcon>
                        <DeleteIcon className='delItem' onClick={() => deleteItem( item.id )}></DeleteIcon>
                    </IconContainer>
                    <ItemDetails onClick={() => setSelectedItem(item)}>
                        <h3>{item.itemname}</h3>
                        <p>Description: {item.description.length > 100 ? item.description.slice(0, 50) + "..." : item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                    </ItemDetails>
                </ItemContainer>
                ))
                }
            </ItemsWrapper>
        </ContainerDiv>
        </>
    )
}

const ContainerDiv = styled.div`
height: calc(100vh - 200px);
overflow-y: auto;
margin: 20px;
`
const DetailsContainer = styled.div`
border-radius: 5px;
padding: 1em;
margin-top: 1em;
margin-bottom: 1em;
margin-left: 8em;
margin-right: 8em;
display:flex;
flex-direction: column;
align-items: center;
`
const ItemsWrapper = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
`

const IconContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const ItemContainer = styled.div`
background-color: lightblue;
width: 350px;
height: 200px; 
padding: 1em;
margin: 1em;
display: flex;
flex-direction: column;
border-radius: 5px;
`

const ItemDetails = styled.div`
`