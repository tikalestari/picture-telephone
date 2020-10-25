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

export class waitroom extends Component {
    render() {
        return (
            <div>
                Waiting room
            </div>
        )
    }
}

export default waitroom
