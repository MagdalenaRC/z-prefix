import { useState, useEffect } from 'react';
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
        <ContainerDiv>
            <DetailsContainer style={selectedItem ? { backgroundColor: "#9F6DF0" } : {}}>
                <h3>{selectedItem?.itemname}</h3>
                {selectedItem?.description !== undefined && <p>Description: {selectedItem?.description}</p>}
                {selectedItem?.quantity !== undefined && <p>Quantity: {selectedItem?.quantity}</p>}
            </DetailsContainer>
            
            <ItemsWrapper>
                {allItems.length === 0 ? "No items in inventory" :
                allItems.map((item, index) => (
                    <ItemContainer onClick={() => setSelectedItem(item)}>
                        <h3>{item.itemname}</h3>
                        <p>Description: {item.description.length > 100 ? item.description.slice(0, 50) + "..." : item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                    </ItemContainer>
                ))
                }
            </ItemsWrapper>
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
height: calc(100vh - 200px);
overflow-y: auto;
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

