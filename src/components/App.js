import React from 'react'
import Signup from "./Signup"
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
function App() {
  <CssBaseline />
  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: '4em', textAlign:'center'}}>
        <Signup />
      </Container>
    </>
  )
}

export default App;
