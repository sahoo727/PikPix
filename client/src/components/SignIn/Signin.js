import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { GoogleLogin } from 'react-google-login';

import Input from './Input';
import Icon from './Icon';
import useStyles from './Styles';
// import './style.css';

function Signin() {
  const [isSignup, setIsSignup] = useState(true);
  const classes = useStyles();

  const handleChange = () => {

  }

  const googleSuccess = async(res) => {
    const result = res?.profileObj; 
    const token = res?.tokenId;
    console.log(token);
    console.log(result);
    console.log('done');
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log('Google Sign in was unsuccessful. Try again later');
  };

  return (
    <Grid container spacing={5} padding='1.5rem'>
        <Grid  item md={5} xs={12} className={classes.grid}>
          <Paper className={classes.paper} elevation={3} >
            <Avatar sx={{ bgcolor: 'purple' }}>
              <LockOutlined/>
            </Avatar>
            <Typography variant='h6'>
              {isSignup ? `Sign Up` : `Sign In`}
            </Typography>
            <form className={classes.form}>
              <Grid container spacing={2}>
                {isSignup && 
                  (<>
                    <Input name='firstname' handleChange={handleChange} placeholder='First Name' label='First Name' autoFocus half />
                    <Input name='lastname' handleChange={handleChange} placeholder='Last Name' label='Last Name' half />
                  </>)
                }

                <Input name='email' handleChange={handleChange} placeholder='example@example' label='Email Address' type='email'  />
                {isSignup && 
                  (<Input name='phone' handleChange={handleChange} placeholder='1234567890' label='Phone Number' type='tel'  /> )
                }
                
                {isSignup && 
                  (<>
                    <Input name='dob' handleChange={handleChange} label='Date Of Birth' type='date' half />
                    <Input name='gender' handleChange={handleChange} label='Gender' select options={['Male','Female']} half />
                  </>)
                }

                <Input name='password' handleChange={handleChange} placeholder='Password' label='Password' type='password'/>
                {isSignup && 
                  (<Input name='confirmpassword' handleChange={handleChange} placeholder='Repeat Password' label='Confirm Password' type='password'/>)
                }

              </Grid>

              <Button className='signup-buttons' type='submit' fullWidth variant='contained' color='primary'>{isSignup ? `Sign Up` : `Sign In`}</Button>
              <GoogleLogin
                clientId='272077959906-04m5tpm2vg05b7v3fs3tj9s67cfa1m3j.apps.googleusercontent.com'
                render={(renderProps) => (
                    <Button 
                        className='signup-buttons'
                        variant='outlined' 
                        color='primary' 
                        fullWidth 
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        startIcon={<Icon/>}
                    >
                      SignUp With Google
                    </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                // isSignedIn={true}
                cookiePolicy='single_host_origin'
              />
            </form>

          </Paper>
        </Grid>

        <Grid  item md={7} xs={12}>
            <Typography>hello</Typography>
        </Grid>
    </Grid>
    
  )
}

export default Signin