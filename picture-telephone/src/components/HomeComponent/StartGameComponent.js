import React from 'react';
import {
    Container,
    Button
} from "reactstrap";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    button: {
        display: "inline-block",
        width: 500,
        color: '#FEFEFE',
        backgroundColor: '#FA5E3C'
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#FA5E3C',
        opacity: 0.7,
        marginLeft: 12
    }
});

function StartGameComponent() {
    return (
        <Container>
            <Button className={css(styles.button)} size="lg" block>START A NEW GAME</Button>
        </Container>
    );
}

export default StartGameComponent;