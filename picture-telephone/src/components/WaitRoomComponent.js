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
    deleteButton: {
        display: "inline-block",
        width: 500,
        color: '#FEFEFE',
        backgroundColor: '#FA5E3C'
    },
    startButton: {
        display: "inline-block",
        width: 500,
        color: '#FEFEFE',
        backgroundColor: '#6ABA86'
    }
});

class waitroomComponent extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            loading: false,
            errors: {}
        }
    }
    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
        return (
            <Column className={css(styles.container)}>
            <Button className={css(styles.startButton)} size="lg" block >START GAME</Button>
            <Button className={css(styles.deleteButton)} size="lg" block>DELETE GAME</Button>
            </Column>
        );
    }
}

export default waitroomComponent;