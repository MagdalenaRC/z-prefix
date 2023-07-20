import { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

//FORMATING IMPORTS//
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export default function MyItems() {
    const { user } = useContext(AppContext);
    const [ myData, setMyData ] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/myitems/${user}`)
        .then(res => res.json())
        .then(data => setMyData(data))
    })


    //using the asyc function with the data from the inputs 
    const submitAddItem = async e => {
        e.preventDefault();
        let inputItemname = document.getElementById('itemname').value;
        let inputDescription = document.getElementById('description').value;
        let inputQuantity = document.getElementById('quantity').value;
        console.log(inputItemname);
        addItem(inputItemname, inputDescription, inputQuantity);
    }
    //asyc function to POST 
    async function addItem( itemname, description, quantity) {
        let newItemId
        fetch(`http://localhost:3001/`,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"user_account_id": user,"itemname":itemname, "description": description, "quantity": quantity})
        })
        .then(response => response.json())
        .then(data=> newItemId = data.id)
        .catch(error => console.error('Error:', error));
        console.log(newItemId)
    }

    async function editItem() {

    }

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
                    {console.log(selectedItem)}
                    <p>Quantity: {item.quantity}</p>
                </ItemDetails>
                <DeleteIcon className='delItem' onClick={() => deleteItem( item.id )}></DeleteIcon>
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