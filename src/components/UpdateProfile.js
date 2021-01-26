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

export default function UpdateProfile() {
   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()
   const { currentUser , updateEmail, updatePassword } = useAuth()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   function handleSubmit(e){
      e.preventDefault()

      //Validations
      if(passwordRef.current.value !== passwordConfirmRef.current.value){
         return setError('Passwords do not match')
      }
      
      const promises = []
      setLoading(true)
      setError('')

      if(emailRef.current.value !== currentUser.email){
         promises.push(updateEmail(emailRef.current.value))
      }
      if (passwordRef.current.value){
         promises.push(updatePassword(passwordRef.current.value))
      }

      Promise.all(promises).then( () => { // if all the promises are ok it calls the then function
         history.push('/')
      }).catch(()=>{
         setError('Failed to update account')
      }).finally(()=>{
         setLoading(false)
      })

     
   }

   return (
      <>
         <ThemeProvider theme={theme}>
            <Card style={{ textAlign:'center', marginBottom:'1em'}}>
                  <CardContent>
                     <Typography variant="h3">Update Profile</Typography>
                     {error && <Alert severity="error">{error}</Alert>}
                     <form onSubmit={handleSubmit}>
                        <FormControl  style={{width:'85%', gap:'1.5em'}}>
                           <TextField 
                              fullWidth 
                              label="Email" 
                              type="email" 
                              inputRef={emailRef} 
                              defaultValue={currentUser.email} 
                              required
                           />
                           <TextField 
                              fullWidth 
                              label="Password" 
                              type="password" 
                              inputRef={passwordRef} 
                              helperText="Leave blank to keep the same"
                           />
                           <TextField 
                              fullWidth 
                              label="Password Confirmation" 
                              type="password" 
                              inputRef={passwordConfirmRef} 
                              helperText="Leave blank to keep the same"
                           />
                           <Button disabled={loading} variant="contained" color="primary" disableElevation type="submit" >Update</Button>
                        </FormControl>
                     </form>
                  </CardContent>
            </Card>
            <Typography variant="body1"><Link to="/">Cancel</Link></Typography>
         </ThemeProvider>
      </>
   )
}
