import React from 'react';
import './App.css';
import {Switch,Route,} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignPage from './pages/signPage/signPage.component';
import { auths, createUserProfileDocument } from './firebase/firebase.uitls';
import SetCurrentUser from './redux/user/user.action'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';


class App extends React.Component {
  

  
  logOut=null
  componentDidMount() {
   
    this.logout = auths.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
       
        const userRef = await createUserProfileDocument(userAuth)
        
        
        userRef.onSnapshot(snapShot => {
          
          this.props.SetCurrentUser({
            currentUser:
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          

          

        } )    
      }
      
       this.props.SetCurrentUser({ currentUser: userAuth })
      
    })
  }

  componentWillUnmount() {
    this.logout()
    
  }

  render() {
    return (
    <div className='app'>
        <Header  />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route  path="/shop">
          <ShopPage />
        </Route>
          <Route exact path="/Sign">
          {()=> this.props.currentUser?(<Redirect to="/"/>):(<SignPage/>)}
          </Route>

      </Switch>
      
    </div>
  );
 }
}
const mapDispatchToProps = dispatch => ({
  SetCurrentUser:user=> dispatch(SetCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
