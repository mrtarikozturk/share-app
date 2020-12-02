import React, { useState } from "react";
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
        backgroundColor: theme.palette.primary.main,
        margin: '1rem auto',
    },
    forgot: {
        margin: "1rem",
    },

}));

//Form control initial values
const initialValues = {
    email: "",
    password: "",
};

// Form validation object
const forgotValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Invalid e-mail')
        .required('This field is required'),
    password: yup.string()
        .required('No password provided.')
});

function ForgotPassword() {
    // constants
    const forgotStyles = stylesFunc();

    //states
    const [loginError, setLoginError] = useState(null);

    const handleFormSubmit = (values) => {
        // firebase.signIn(values.email, values.password);
        firebase.signIn(values.email, values.password).then(res => {
            res ? setLoginError(res) : setLoginError(null)
        });
    };

    return (
        <Container className={forgotStyles.wrapper} maxWidth="sm">
            <Avatar className={forgotStyles.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography className={forgotStyles.forgot} variant="h4">
                Forgot Password
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={forgotValidationSchema}
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
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                        <p style={{ textAlign: "center", color: "red" }}><small>{loginError}</small></p>
                    </form>
                )}
            </Formik>
        </Container >
    );
}

export default ForgotPassword;

//TODO: Add image and singin and sign up icon. forgot link. + Password confirmation
// TODO: https://undraw.co/search