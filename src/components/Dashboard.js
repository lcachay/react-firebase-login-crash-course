import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Card , CardContent , Typography , Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../contexts/AuthContext'
import { Link , useHistory} from 'react-router-dom'

const theme = createMuiTheme({
   typography: {
     h3: {
      marginTop: '.7em',
      marginBottom: '.5em',
     },
   },
 });

export default function Dashboard() {

   const [error, setError] = useState('')
   const { currentUser, logout } = useAuth()
   const history = useHistory()

   async function handleLogout(){
      setError('')

      try{
         await logout()
         history.push('/login')
      } catch {
         setError('Failed to log out')
      }
   }

   return (
      <>
         <ThemeProvider theme={theme}>
            <Card style={{ textAlign:'center', marginBottom:'1em'}}>
               <CardContent>
                  <Typography variant="h3">Profile</Typography>
                  {error && <Alert severity="error">{error}</Alert>}
                  <Typography varian="body1">
                     <strong>Email: </strong> {currentUser.email}
                  </Typography>
                  <Button variant="contained" color="primary" style={{margin:'1.125em 0', width:'100%'}}>
                     <Link style={{textDecoration: 'none', color:'inherit'}} to="/update-profile">Update Profile</Link>
                  </Button>
                  
               </CardContent>
            </Card>
            <Button color="secondary" onClick={handleLogout}>Log Out</Button>
         </ThemeProvider>
      </>
   )
}
