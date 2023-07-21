import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

import styled from 'styled-components';
import { Button, OutlinedInput, FormControl, InputLabel} from '@mui/material';


export default function AddItem() {
    const { user } = useContext(AppContext);
    const navigate = useNavigate();

     //using the asyc function with the data from the inputs 
     const submitAddItem = async e => {
        e.preventDefault();
        let inputItemname = document.getElementById('itemname').value;
        let inputDescription = document.getElementById('description').value;
        let inputQuantity = document.getElementById('quantity').value;
        let inputImage = document.getElementById('image').value;
        console.log(inputItemname);
        addItem(inputItemname, inputDescription, inputQuantity, inputImage);
    }
    //asyc function to POST 
    async function addItem( itemname, description, quantity, image) {
        let newItemId
        fetch(`http://localhost:3001/`,{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"user_account_id": user,"itemname":itemname, "description": description, "quantity": quantity, "image": image})
        })
        .then(response => response.json())
        .then(data=> {
            newItemId = data.id;
            console.log(newItemId);
            navigate(`/myitems`)
        })
        .catch(error => console.error('Error:', error));
    }

    return(
        <Form>
            <h2>Add Item</h2>
            <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
                <InputLabel htmlFor="itemname">Item Name</InputLabel>
                <OutlinedInput id="itemname" label="itemname"/> 
            </FormControl>
            <FormControl sx={{ml:2, mr:2, my:5}} variant="outlined">
                <InputLabel htmlFor="description">Description</InputLabel>
                <OutlinedInput id="description" label="description" multiline rows={4}/> 
            </FormControl>
            <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
                <InputLabel htmlFor="quantity">Quantity</InputLabel>
                <OutlinedInput type="number" id="quantity" label="quantity"/> 
            </FormControl>
            <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
                <InputLabel htmlFor="image">Image</InputLabel>
                <OutlinedInput id="image" label="image" /> 
            </FormControl>
            <ButtonContainer>
                <Button variant="contained" style={{ width: '200px'}} type="submit" className='addItemBtn' onClick = {submitAddItem}>Add Item</Button>
            </ButtonContainer>
        </Form>
    )
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  justify-content: center;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`