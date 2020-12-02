import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Navbar from '../components/Navbar';
import UserDetail from '../pages/UserDetail';
import Footer from '../components/Footer';
import { FirebaseAuthContext } from '../context/AuthContext';
import ForgotPassword from '../pages/ForgotPassword.js';

function AppRouter() {

    const { currentUser } = useContext(FirebaseAuthContext);

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/register' component={Signup} />
                <Route exact path='/login' component={Signin} />
                <Route exact path='/forgot-password' component={ForgotPassword} />
                <Route exact path='/user/:id' component={currentUser ? UserDetail : Signin} />
                <Route path='/' component={Main} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default AppRouter;
