import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import DisplayNameComponent from './DisplayNameComponent';
import StartGameComponent from './StartGameComponent';
import JoinGameComponent from './JoinGameComponent';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363740',
        height: '100vh',
        display: "grid",
        justifyContent: "center",
        alignContent: "center"
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function HomeComponent(props) {
    return (
        <Column className={css(styles.container)}>
            <DisplayNameComponent/>
            <StartGameComponent/>
            <JoinGameComponent/>
        </Column>
    );
}

export default HomeComponent;