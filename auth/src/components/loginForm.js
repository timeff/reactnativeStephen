import React,{Component} from 'react';
import firebase from 'firebase';
import {Button,Card,CardSection,Input,Spinner} from './common';
import {Text} from 'react-native';


class LoginForm extends Component{
    state ={
        email:'',
        password:'',
        error:'',
        loading:false
    };
    onButtonPress(){
        const {email,password} = this.state;

        this.setState({error:'',loading:true});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>this.onLoginSuccess())
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch(()=>this.onLoginFail())
        })
    };

    onLoginSuccess(){
        this.setState({
            error:'',
            loading:false,
            email:'',
            password:''
        });
    }

    onLoginFail(){
        this.setState({
            error:'Authentication Failed.',
            loading:false
        })
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size='small'/>;
        }
        return <Button onPress={()=>this.onButtonPress()}>Log in</Button>;
    }

    render(){
        return (<Card>
            <CardSection>
                <Input 
                label='Email'
                value={this.state.email}
                onChangeText={email=>this.setState({email})}
                placeholder='user@gmail.com'
                />
            </CardSection>
            <CardSection>
                <Input 
                label='Password'
                value={this.state.password}
                onChangeText={password=>this.setState({password})}
                placeholder='Password'
                secureTextEntry
                />
            </CardSection>
            <Text style={styles.errorText}>{this.state.error}</Text>
            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>);
    }
}

const styles = {
    errorText:{
        fontSize:20,
        color:'red',
        alignSelf:'center'
    }
}

export default LoginForm;

