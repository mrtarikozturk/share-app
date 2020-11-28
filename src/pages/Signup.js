import React from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/firebase.utils';


//custom style
const styles = makeStyles({
    wrapper: {
        marginTop: '10rem',
    }
});

const Signup = () => {

    //custom style object
    const signupStyles = styles();

    //validation
    const validate = values => {
        const errors = {};

        if (!values.displayName) {
            errors.displayName = 'Required';
        } else if (values.displayName.length > 15) {
            errors.displayName = 'Must be 15 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length > 20) {
            errors.password = 'Must be 20 characters or less';
        }

        return errors;
    };

    // formik
    const formik = useFormik({
        initialValues: {
            displayName: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            firebase.register(values.displayName, values.email, values.password);
            console.log(firebase);
        },
    });

    const handleGoogleButtonClick = () => {
        firebase.useGoogleProvider();
    }

    return (
        <Container
            className={signupStyles.wrapper}
            maxWidth='sm'
        >
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="displayName"
                            name="displayName"
                            label="Display Name"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.displayName}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.displayName && formik.errors.displayName ? <div>{formik.errors.displayName}</div> : null}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label="E-mail"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            type='password'
                            fullWidth
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type='submit'>Register</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleGoogleButtonClick}
                        >Sign Up With Google</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Signup;


/**
  {...formik.getFieldProps('password')}

  ifadesi daha pratik olmasi icin:

   onChange={formik.handleChange}
    value={formik.values.displayName}
    onBlur={formik.handleBlur}

    ifadelerinin yerine kullanilir.
*/