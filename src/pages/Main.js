import React, { useEffect, useState } from 'react'
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Mediacard from '../components/MediaCard';

// style object
const styleFunc = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        marginTop: '5rem',
        textAlign: 'center',

        // TODO: stillendirmeyi yap
    },

}))

const Main = () => {

    // constants
    const { REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN } = process.env;
    const mainStyles = styleFunc();

    // states
    const [userList, setUserList] = useState();

    // useEffects
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}/user`, {
            headers: {
                'app-id': REACT_APP_API_TOKEN,
            }
        });
        setUserList(response?.data?.data);
        console.log(response)
    }
    return (
        <Container className={mainStyles.wrapper} maxWidth={'lg'}>
            {
                !userList
                    ? (<CircularProgress />)
                    : (
                        <Grid container spacing={3}>
                            {
                                userList?.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Mediacard data={item} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    )
            }
        </Container >
    )
}

export default Main
