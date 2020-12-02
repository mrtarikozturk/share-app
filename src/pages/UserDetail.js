import React, { useEffect, useState } from 'react';
import { CircularProgress, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { fetchData } from '../helper/FetchData';
import { Typography } from '@material-ui/core';
import { dateFormater } from '../helper/FormatDate';


// style object
const styleFunc = makeStyles((theme) => ({
    wrapper: {
        // TODO: stillendirmeyi yap
        marginTop: "10rem",
        height: "calc(100vh - 19.0625rem)",
        textAlign: "center",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
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
    }, [id])


    return (
        <Container className={detailStyles.wrapper}>
            {
                !userDetail
                    ? (<CircularProgress />)
                    : <React.Fragment>
                        <img src={userDetail?.picture} alt='user' />
                        <Typography variant='h4' >{userDetail?.firstName}</Typography>
                        <Typography variant='h4' >{userDetail?.lastName}</Typography>
                        <Typography variant='h4' >
                            {dateFormater(userDetail?.registerDate)}
                        </Typography>
                        <Typography variant='h4' >{userDetail?.phone}</Typography>
                    </React.Fragment>
            }
        </Container>
    )
}

export default UserDetail


// TODO: Burayi api sayfasindaki gibi detaylandir ve haritayi da kullan.
// TODO: https://stackoverflow.com/questions/39857425/react-page-keep-footer-at-the-bottom-of-the-page
// TODO: move datetime to helper 
// TODO: carlardaki butonlari guzelletir.
