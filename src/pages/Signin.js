import React from "react";
import { Button, TextField, Grid, Container, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import firebase from "../firebase/firebase.utils";
import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';

// style object
const stylesFunc = makeStyles((theme) => ({
    wrapper: {
        marginTop: "10rem",
        textAlign: 'center',
        height: 'calc(100vh - 19.0625rem)',
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: '1rem auto',
    }
}));

//Form control initial values
const initialValues = {
    email: "",
    password: "",
};

// Form validation object
const signInValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Invalid e-mail')
        .required('This field is required'),
    password: yup.string()
        .required('No password provided.')
});

function Signin() {
    const signinStyles = stylesFunc();

    const handleGoogleButtonClick = () => {
        firebase.useGoogleProvider();
    };

    const handleFormSubmit = (values) => {
        firebase.signIn(values.email, values.password);
    };

    return (
        <Container className={signinStyles.wrapper} maxWidth="sm">
            <Avatar className={signinStyles.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h4">
                Sign In
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={signInValidationSchema}
            >
                {({ handleSubmit, handleChange, values, errors, handleBlur }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    value={values.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    helperText={errors.email}
                                // onBlur={handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    value={values.password}
                                    onChange={handleChange}
                                    error={errors.email}
                                    helperText={errors.email}
                                // onBlur={handleBlur}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Login
                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handleGoogleButtonClick}
                                >
                                    Sign In with Google
                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </Container>
    );
}

export default Signin;

//TODO: Add image and singin and sign up icon. forgot link. + Password confirmation
// TODO: https://undraw.co/search