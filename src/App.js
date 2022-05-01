import React from 'react';
import './App.css';
import {Switch,Route,} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignPage from './pages/signPage/signPage.component';
import { auths } from './firebase/firebase.uitls';



class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      currentUser:null
    }

  }
  
  logOut=null
  componentDidMount() {
    this.logout=auths.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.logout()
    
  }

  render() {
    return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/Sign">
          <SignPage />
        </Route>

      </Switch>
      
    </div>
  );
 }
}

export default App;
