import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Header,Button,Spinner} from './components/common';
import LoginForm from './components/loginForm';
import firebase from 'firebase';

class App extends Component{
    state={
        loggedIn:null
    }
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDGTC0HWCDgXVhMnQmTyriWLb5NOCdsAow",
            authDomain: "reactstephen.firebaseapp.com",
            databaseURL: "https://reactstephen.firebaseio.com",
            storageBucket: "reactstephen.appspot.com",
            messagingSenderId: "626716857828"
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }else{
                this.setState({loggedIn:false});
            }
        });
    }
    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return (<View style={styles.logoutButton}><Button onPress={()=>firebase.auth().signOut()}>Log Out</Button></View>);
            case false:
                return <LoginForm />;
            default:
                return <View style={styles.spinnerStyle}><Spinner size='small'/></View>;
        }
        
    }
    render(){
        return (
            <View>
                <Header headerText='Authentication!'/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles={
    spinnerStyle:{
        marginTop:10
    },
    logoutButton:{
        marginTop:10
    }
}
export default App;