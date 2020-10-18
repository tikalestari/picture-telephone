import React, { Component } from 'react'
import {
    Container,
    Form, FormGroup, Input, Button
} from "reactstrap";
import { StyleSheet, css } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';

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

class HomeComponent extends Component {
    render() {
        return (
            <Column className={css(styles.container)}>
                <Form>
                    <FormGroup>
                        <Input
                            placeholder="what is your name?"
                            // value={this.state.value}
                            // onChange={this.handleChange}
                        />
                    </FormGroup>
                </Form>
                <Button className={css(styles.startButton)} size="lg" block>START A NEW GAME</Button>
                <Button className={css(styles.joinButton)} size="lg" block>JOIN A GAME</Button>
            </Column>
        );
    }
}

export default HomeComponent;
