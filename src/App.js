import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// @redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions/user.actions';
// @components
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/Shop.component';
import Header from './components/Header/Header.component';
import UserPortal from './pages/User_portal/User_portal.component';
// @firebase
import { auth } from './firebase/firebase.utils';
import firestoreController from './firebase/firebase.firestore';
// @styles
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount = () => this.checkAuth();

  componentWillUnmount = () => this.unsubscribeFromAuth();

  checkAuth = () => {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await firestoreController.createUser(userAuth);
        userRef.onSnapshot(snapshot => setCurrentUser({ user: { id: snapshot.id, ...snapshot.data() } }));
      }

      setCurrentUser(userAuth);
    });
  }

  checkUser = () => this.props.user ? <Redirect to='/' /> : <UserPortal />

  render () {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={this.checkUser} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.user
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
