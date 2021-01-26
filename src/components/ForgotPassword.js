import React, { useRef, useState } from 'react'
import 'fontsource-roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { FormControl , TextField , Button , Card , CardContent , Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom"

 const theme = createMuiTheme({
   typography: {
     h3: {
      marginTop: '.7em',
     },
   },
 });

export default function ForgotPassword() {
   const emailRef = useRef()
   const { resetPassword } = useAuth()
   const [error, setError] = useState('')
   const [message, setMessage] = useState('')
   const [loading, setLoading] = useState(false)

   async function handleSubmit(e){
      e.preventDefault()

      try{
         setMessage('')
         setError('')
         setLoading(true)
         await resetPassword(emailRef.current.value) // async event
         setMessage('Check your inbox for further instructions')
      }catch{
         setError('Failed to reset password')
      }
      setLoading(false)
   }

   return (
      <>
         <ThemeProvider theme={theme}>
            <Card style={{ textAlign:'center', marginBottom:'1em'}}>
                  <CardContent>
                     <form onSubmit={handleSubmit}>
                        <FormControl  style={{width:'85%', gap:'1.5em'}}>
                           <Typography variant="h3">Password Reset</Typography>
                           {error && <Alert severity="error">{error}</Alert>}
                           <TextField fullWidth label="Email" type="email" inputRef={emailRef}/>
                           <Button disabled={loading} variant="contained" color="primary" disableElevation type="submit" >Reset Password</Button>
                        </FormControl>
                        <Typography variant="body1" style={{marginTop:'.75em'}}>
                           <Link to="/login">Login</Link>
                        </Typography>
                     </form>
                  </CardContent>
            </Card>
            <Typography variant="body1">Need an account? <Link to="/signup">Sign Up</Link></Typography>
         </ThemeProvider>
      </>
   )
}
