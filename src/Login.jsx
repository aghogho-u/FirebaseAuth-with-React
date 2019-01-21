import React, { Component } from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import firebase from 'firebase';
import fire  from './fire';

const uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks:{
        signInSuccess: () => false
    }
}



class Login extends Component {
    state={isSignedIn:false}

componentDidMount=()=>{
    firebase.auth().onAuthStateChanged(user=>{
        this.setState({isSignedIn:!!user})
    })
}

    render() { 
        return ( 
            <div>{this.state.isSignedIn ?
                <span> 
                <button onClick={()=>firebase.auth().signOut()} >Sign Out</button>
                <h1> Welcome {firebase.auth().currentUser.displayName}</h1>
                <img src={firebase.auth().currentUser.photoURL} alt="User profile"/>
                </span>
                :
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            }</div>
         );
    }
}
 
export default Login;