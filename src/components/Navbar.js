// #region imports for style
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useHistory } from 'react-router-dom';
import HomeIcon from "@material-ui/icons/Home";
// #endregion

//import for logic structure
import React, { useCallback, useContext } from 'react';
import { FirebaseAuthContext } from '../context/AuthContext';
import firebase from '../firebase/firebase.utils';

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {

    //state
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    //constants
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const { currentUser } = useContext(FirebaseAuthContext);
    const history = useHistory();

    //Functions
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = useCallback(() => {
        firebase.signOut();
    }, []);

    const handleHomeClick = useCallback(() => {
        history.push('/');
    })

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleHomeClick}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        React Share
                    </Typography>
                    {currentUser
                        ? (
                            <div>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    {currentUser?.displayName}
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                                </Menu>
                            </div>
                        )
                        : (
                            <>
                                <MenuItem
                                    onClick={() => {
                                        // window.location.href = "/login";
                                        history.push('/login')
                                    }}
                                >
                                    Sign in
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        // window.location.href = "/register";
                                        history.push('/register');
                                    }}
                                >
                                    Sign up
                                </MenuItem>
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}
