import { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom'
import { AppContext } from '../App'
import styled from 'styled-components'

export default function Home() {

    const [allItems, setAllItems] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/')
        .then((res) => res.json())
        .then((data) => setAllItems(data))
        .catch((err) => console.log(err))
    }, [])

    return(
        <>
        <ContainerDiv>
            <DetailsContainer>
                <h3>{selectedItem?.itemname}</h3>
                <p>{selectedItem?.description}</p>
                {selectedItem?.quantity !== undefined && <p>Quantity: {selectedItem?.quantity}</p>}
            </DetailsContainer>
            
           {allItems.length === 0 ? "No items in inventory" :
           allItems.map((item, index) => (
            <ItemContainer onClick={() => setSelectedItem(item)}>
                <h3>{item.itemname}</h3>
                {console.log(selectedItem)}
                <p>Quantity: {item.quantity}</p>
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

const DetailsContainer = styled.div`

`