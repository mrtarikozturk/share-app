import React, { useEffect, useState } from 'react';
import { Container, Grid, capitalize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { fetchData } from '../helper/FetchData';
import Main from './Main';

// style object
const styleFunc = makeStyles((theme) => ({
    wrapper: {
        // TODO: stillendirmeyi yap
    }
}))


const UserDetail = () => {

    // constant
    const { id } = useParams();
    const detailStyles = styleFunc();

    // states
    const [userDetail, setUserDetail] = useState();

    useEffect(() => {
        fetchData(`/user/${id}`)
            .then(response => setUserDetail(response))
            .catch(error => console.error(error))
    }, [])

    return (
        <Container className={detailStyles.wrapper}>
            {id}
            {JSON.stringify(userDetail)}
        </Container>
    )
}

export default UserDetail


// TODO: Burayi api sayfasindaki gibi detaylandir ve haritayi da kullan.
// TODO: https://stackoverflow.com/questions/39857425/react-page-keep-footer-at-the-bottom-of-the-page