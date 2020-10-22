import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
    Form, FormGroup, Input, Button
} from "reactstrap";
import { StyleSheet, css } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';
import PropTypes from 'prop-types';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        height: '100vh',
        display: "grid",
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#A4A6B3',
        opacity: 0.7,
        marginLeft: 12
    },
    startButton: {
        display: "inline-block",
        width: 500,
        color: '#FEFEFE',
        backgroundColor: '#FA5E3C'
    },
    joinButton: {
        display: "inline-block",
        width: 500,
        color: '#FEFEFE',
        backgroundColor: '#6ABA86'
    }
});

class homeComponent extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            loading: false,
            errors: {}
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const userData = {
            username: this.state.username,
        }
        axios.post('/games', userData)
            .then(res => {
                console.log(res.data);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
        return (
            <Column className={css(styles.container)}>
                <Form>
                    <FormGroup>
                        <Input
                            id="username"
                            name="username"
                            type="username"
                            placeholder="what is your name?"
                            value={this.state.username}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                        />
                    </FormGroup>
                    <Button className={css(styles.startButton)} size="lg" block >START A NEW GAME</Button>
                </Form>
                
                <Button className={css(styles.joinButton)} size="lg" block>JOIN A GAME</Button>
            </Column>
        );
    }
}

homeComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default homeComponent;
// export default withStyles(styles)(login);