import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  state = {
    user: null
  }

  unsubscribeFromAuth = null;

  componentDidMount = () => this.checkAuth();

  componentWillUnmount = () => this.unsubscribeFromAuth();

  checkAuth = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await firestoreController.createUser(userAuth);
        userRef.onSnapshot(snapshot => this.setState({ user: { id: snapshot.id, ...snapshot.data() } }));
      }
      this.setState({ user: userAuth })
    });
  }

  render () {
    console.log(this.state)
    return (
      <Router>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={UserPortal} />
        </Switch>
      </Router>
    );
  }
}


export default App;
