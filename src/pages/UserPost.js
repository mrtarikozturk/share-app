import React, { useEffect, useState } from 'react';
import { CircularProgress, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { fetchData } from '../helper/FetchData';
import UserPostCard from '../components/UserPostCard';

// style object
const styleFunc = makeStyles((theme) => ({
    wrapper: {
        // TODO: stillendirmeyi yap
        marginTop: "10rem",
        minHeight: "calc(100vh - 19.0625rem)",
        textAlign: "center",
    }
}))


const UserPost = () => {

    // constant
    const { id } = useParams();
    const detailStyles = styleFunc();

    // states
    const [userPost, setUserPost] = useState();

    useEffect(() => {
        fetchData(`/user/${id}/post`)
            .then(response => setUserPost(response?.data))
            .catch(error => console.error(error))
    }, [id])


    return (
        <Container className={detailStyles.wrapper}>

            {
                !userPost
                    ? (<CircularProgress />)
                    : <React.Fragment>
                        {
                            userPost.map(item => (
                                <UserPostCard

                                />
                            ))
                        }
                    </React.Fragment>
            }
        </Container >
    )
}

export default UserPost


// TODO: Burayi api sayfasindaki gibi detaylandir ve haritayi da kullan.
// TODO: https://stackoverflow.com/questions/39857425/react-page-keep-footer-at-the-bottom-of-the-page
// TODO: move datetime to helper 
// TODO: carlardaki butonlari guzelletir.
