import React from 'react'
import Signup from "./Signup"
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  <CssBaseline />
  return (
    <>
      <AuthProvider>
        <Container maxWidth="sm" style={{ marginTop: '4em', textAlign:'center'}}>
          <Signup />
        </Container>
      </AuthProvider>
    </>
  )
}

export default App;
