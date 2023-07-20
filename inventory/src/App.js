import { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import MyItems from './Components/MyItems';
import AddItem from './Components/AddItem';
import CreateAccount from './Components/CreateAccount';
import EditItem from './Components/EditItem'
import styled from 'styled-components'


export const AppContext = createContext();

function App() {

  const [user, setUser] = useState()
  const [isVerified, setIsVerified] = useState(false)

  const ContextObject = { user, setUser,
                          isVerified, setIsVerified
                         } 

  return (
    <AppWrapper id="App">
    <AppContext.Provider value={ContextObject}>
        <BrowserRouter>
            <Header />
            <BodyContainer>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login/*' element={<Login />} />
                    <Route path='/myitems/*' element={<MyItems />} />
                    <Route path='/additem/*' element={<AddItem />} />
                    <Route path='/edititem/*' element={<EditItem />} />
                    <Route path='/createaccount/*' element={<CreateAccount />} />
                    <Route path='/*' element={<Home />} /> catch all
                </Routes>
            </BodyContainer>
        </BrowserRouter>
    </AppContext.Provider>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow-y: hidden;
`

const BodyContainer = styled.div`
`

