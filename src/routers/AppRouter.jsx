import { Container } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from '../pages/homeScreen';
import LoginScreen from '../pages/LoginScreen';
import Dashboard from '../pages/Dashboard';
import {PrivateRoute} from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {

    const isLogin = false;

    return (
        <Container
            sx={{
                minHeight: '100vh',
                maxWidth:"100%",
                padding: "0"
            }}
            /* border="1px solid red" */
        >
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/login" element={ 
                        <PublicRoute isLogin={isLogin}>
                            <HomeScreen />
                        </PublicRoute>
                    } />
                    
                    <Route path="/*" element={
                        <PrivateRoute isLogin={isLogin}>
                            <Dashboard />
                        </PrivateRoute>
                    } />

                </Routes>
            </BrowserRouter>
        </Container>
    )
}

export default AppRouter;