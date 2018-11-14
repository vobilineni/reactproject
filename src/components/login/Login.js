import React, { Component } from 'react';
// import { Button, Input } from 'antd';
import { gql, graphql } from 'react-apollo';

class Login extends Component {
    state = {
        username: '',
        email: '',
    };

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        });
    };

    onSubmit = async () => {
        const response = await this.props.mutate({
            variables: this.state,
        });
        console.log(response);
    };

    render() {
        return (
            <div>
                <input
                    name='email'
                    placeholder='Email'
                    onChange={e => this.onChange(e)}
                    value={this.state.email} />
                <input
                    name='password'
                    placeholder='Password'
                    type='password'
                    onChange={e => this.onChange(e)}
                    value={this.state.password} />
                <br />
                <button onClick={() => this.onSubmit()} type="primary">Login</button>
            </div>
        );
    }
}

const mutation = gql`
mutation($email: String!, $password: String!) {
	login(email: $email, password: $password) {
	  token
	  refreshToken
	} 
}
`;

export default graphql(mutation)(Login);