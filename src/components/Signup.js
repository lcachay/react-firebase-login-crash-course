import React, { useRef, useState } from 'react'
import 'fontsource-roboto';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { FormControl , TextField , Button , Card , CardContent , Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../contexts/AuthContext'
import { Link , useHistory} from "react-router-dom"

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
   const { signup } = useAuth()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   async function handleSubmit(e){
      e.preventDefault()

      //Validations
      if(passwordRef.current.value !== passwordConfirmRef.current.value){
         return setError('Passwords do not match')
      }

      try{
         setError('')
         setLoading(true)
         await signup(emailRef.current.value, passwordRef.current.value) // async event
         history.push('/')
      }catch{
         setError('Failed to create an account')
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
                           <Typography variant="h3">Sign Up</Typography>
                           {error && <Alert severity="error">{error}</Alert>}
                           <TextField fullWidth label="Email" type="email" inputRef={emailRef}/>
                           <TextField fullWidth label="Password" type="password" inputRef={passwordRef}/>
                           <TextField fullWidth label="Password Confirmation" type="password" inputRef={passwordConfirmRef} required/>
                           <Button disabled={loading} variant="contained" color="primary" disableElevation type="submit" >Sign Up</Button>
                        </FormControl>
                     </form>
                  </CardContent>
            </Card>
            <Typography variant="body1">Already have an account? <Link to="/login">Log In</Link></Typography>
         </ThemeProvider>
      </>
   )
}
