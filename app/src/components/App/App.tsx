import React from 'react'
import styled from 'styled-components'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom"
import './css/reset.css'
import './css/variables.css'
import './css/general.css'

// import MainPage from '../../pages/main'
// import EntrancePages from '../../pages/entrance'
// import UserAreaPages from '../../pages/userArea'
// import MessagePage from '../../pages/messagePage'
// import PageNotFound from '../../pages/pageNotFound'


export default function App() {


// Use Title and Wrapper like any other React component – except they're styled!
    return(
        <Wrapper>
            1231
            {/*<Switch>
                <Route path='/' exact>
                    <MainPage />
                </Route>
                <Route path='/(reg|enter|forgot-password)'>
                    <EntrancePages />
                </Route>
                <Route path='/reset-password/:token'>
                    <EntrancePages />
                </Route>
                <Route path='/(notes|user)'>
                    <UserAreaPages />
                </Route>
                <Route path='/message' exact>
                    <MessagePage />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>*/}
        </Wrapper>
    )
}


const Wrapper = styled.section`
    display: flex;
    width: 100%;
    max-width: 1500px;
    min-width: 500px;
    background-color: red;
    margin: 0 auto;
`;
