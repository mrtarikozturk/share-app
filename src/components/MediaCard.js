import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../helper/Functions';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// style object
const cardStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: 'auto',
        marginBottom: '30px',
        transition: '0.3s',
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.5)",
        "&:hover": {
            transform: 'scale(1.02)',
            boxShadow: "0 20px 70px -13px rgba(0,0,0,0.5)"
        }
    },
    media: {
        height: 300,
        width: 'auto',
        resizeMode: 'contain',
    },
});

const MediaCard = ({ data: { picture, title, firstName, lastName, email, id } }) => {

    // constant
    const classes = cardStyles();
    const history = useHistory();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => history.push(`/user/${id}`)}>
                <CardMedia
                    className={classes.media}
                    image={picture}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${title.capitalize()} ${firstName} ${lastName}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {email}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    View Full Profile
                </Button>
                <Button size="small" color="primary">
                    View User Posts
                </Button>
            </CardActions>
        </Card>
    );
}

MediaCard.propTypes = {
    id: PropTypes.string.isRequired,
}

export default MediaCard;

