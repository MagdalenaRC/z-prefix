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
            <DetailsContainer>
                <h3>{selectedItem?.itemname}</h3>
                <p>{selectedItem?.description}</p>
                {selectedItem?.quantity !== undefined && <p>Quantity: {selectedItem?.quantity}</p>}
            </DetailsContainer>
            
           {myData.length === 0 ? "No items in inventory" :
           myData.map((item, index) => (
            <ItemContainer>
                <ItemDetails onClick={() => setSelectedItem(item)}>
                    <h3>{item.itemname}</h3>
                    <p>Description: {item.description.length > 100 ? item.description.slice(0, 50) + "..." : item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                </ItemDetails>
                <DeleteIcon className='delItem' onClick={() => deleteItem( item.id )}></DeleteIcon>
                <EditIcon  className='editBtn' onClick={() => navigate('/edititem', 
                    {state:{ itemId: item.id, itemname: item.itemname, description: item.description, quantity: item.quantity}})}></EditIcon>
            </ItemContainer>
           ))
           }
        </ContainerDiv>
        </>
    )
}

const ContainerDiv = styled.div`
display: flex;
flex-flow: row wrap;
`
const ItemContainer = styled.div`
background-color: lightblue;
padding: 1em 1em 1em 1em;
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px;
`

const ItemDetails = styled.div`
`

const DetailsContainer = styled.div`

`