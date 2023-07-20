
import { useNavigate, useLocation } from 'react-router-dom'

import styled from 'styled-components';
import { Button, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function EditItem () {
  const location = useLocation();
  const navigate = useNavigate();

  const submitEditItem = async e => {
    e.preventDefault();
    let inputItemId = location.state.itemId;
    let inputItemname = document.getElementById('itemname').value;
    let inputDescription = document.getElementById('description').value;
    let inputQuantity = document.getElementById('quantity').value;
    editItem(inputItemId, inputItemname, inputDescription, inputQuantity);
}

  async function editItem(itemId, itemname, description, quantity) {
    fetch(`http://localhost:3001/myitems/${itemId}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "itemname": itemname, "description": description, "quantity": quantity })
    })
      .then(response => response.json())
      .then(data => console.log(data.message))
      .then(() => navigate('/myitems'))
      .catch(error => console.error('Error:', error));
  }


  return(
    <>
      <Form>
          <h2>Edit Item</h2>
          <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
              <TextField
              id="itemname" 
              label="Item Name"
              defaultValue={location.state.itemname}
              /> 
          </FormControl>
          <FormControl sx={{ml:2, mr:2, my:5}} variant="outlined">
              <TextField 
              id="description" 
              label="Description"
              defaultValue={location.state.description}
              multiline rows={4}
              /> 
          </FormControl>
          <FormControl sx={{ml:2, mr:2, my:1}} variant="outlined">
              <TextField 
              type="number" 
              id="quantity" 
              label="Quantity"
              defaultValue={location.state.quantity}
              /> 
          </FormControl>
          <Button variant="contained" type="submit" className='editItemBtn' onClick = {submitEditItem}>Edit Item</Button>
      </Form>
    </>
  )
}

const Form = styled.div`
display: flex;
flex-direction: column;
margin: 100px;
`