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

export default function Login() {
   const emailRef = useRef()
   const passwordRef = useRef()
   const { login } = useAuth()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   async function handleSubmit(e){
      e.preventDefault()

      try{
         setError('')
         setLoading(true)
         await login(emailRef.current.value, passwordRef.current.value) // async event
         history.push('/')
      }catch{
         setError('Failed to sign in')
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
                           <Typography variant="h3">Log In</Typography>
                           {error && <Alert severity="error">{error}</Alert>}
                           <TextField fullWidth label="Email" type="email" inputRef={emailRef}/>
                           <TextField fullWidth label="Password" type="password" inputRef={passwordRef}/>
                           <Button disabled={loading} variant="contained" color="primary" disableElevation type="submit" >Log In</Button>
                        </FormControl>
                        <Typography variant="body1" style={{marginTop:'.75em'}}>
                           <Link to="/forgot-password">Forgot Password?</Link>
                        </Typography>
                     </form>
                  </CardContent>
            </Card>
            <Typography variant="body1">Need an account? <Link to="/signup">Sign Up</Link></Typography>
         </ThemeProvider>
      </>
   )
}
