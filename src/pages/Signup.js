import React from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//custom style
const styles = makeStyles({
    wrapper: {
        marginTop: '10rem',
    }
});

const Signup = () => {

    //custom style object
    const signupStyles = styles();

    return (
        <Container
            className={signupStyles.wrapper}
            maxWidth='sm'
        >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="Display Name"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth>Submit</Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth>Sign Up With Google</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Signup;
