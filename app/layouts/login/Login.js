import React, { Component } from 'react';
import { Icon, Grid, Row } from 'react-native-elements';
import LargeButton from '../../components/LargeButton';
import SmallTextInput from '../../components/SmallTextInput';
import { styles } from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  onPress = (e) => {
    console.log(this.state.username);
  }

  render(){
    return (
      <Grid containerStyle={styles.container}>
        <Row>
          <Icon
            name='mood'
            size='60'
            color='#1da1f2'
          />
        </Row>
        <Row containerStyle={styles.loginBox}>
          <SmallTextInput
            type='big'
            onChange={(text) => this.setState({username: text})}
            placeholder='Enter Username'
            />
          <LargeButton
            onPress={this.onPress}
            title={'LOGIN'}
            />
        </Row>
      </Grid>
    );
  }
}