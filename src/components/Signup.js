import React, { useRef } from 'react'
import 'fontsource-roboto';
import { createMuiTheme, ThemeProvider, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import { FormControl , TextField , Button , Container, Card , CardContent , Typography } from '@material-ui/core';

 const theme = createMuiTheme({
   typography: {
     h3: {
      marginTop: '.7em',
     },
   },
 });

export default function Signup() {
   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()

   return (
      <>
         <ThemeProvider theme={theme}>
            <Card style={{ textAlign:'center', marginBottom:'1em'}}>
                  <CardContent>
                     <FormControl style={{width:'85%', gap:'1.5em'}}>
                        <Typography variant="h3">Sign Up</Typography>
                        <TextField fullWidth label="Email" type="email" ref={emailRef}/>
                        <TextField fullWidth label="Password" type="password" ref={passwordRef}/>
                        <TextField fullWidth label="Password Confirmation" type="password" ref={passwordConfirmRef} required/>
                        <Button variant="contained" color="primary" disableElevation type="submit" >Sign Up</Button>
                     </FormControl>
                  </CardContent>
            </Card>
            <Typography variant="body1">Already have an account? Log In</Typography>
         </ThemeProvider>
      </>
   )
}
