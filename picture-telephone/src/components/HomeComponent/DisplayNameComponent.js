import React from 'react';
import {
    Container,
    Form, FormGroup, Input
} from "reactstrap";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        display: "inline-block",
        width: 500
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
    }
});

function DisplayNameComponent() {
    return (
        <Container>
            <Form className={css(styles.container)}>
                <FormGroup>
                    <Input
                        placeholder="what is your name?"
                        // value={this.state.value}
                        // onChange={this.handleChange}
                    />
                </FormGroup>
            </Form>
        </Container>
    );
}

export default DisplayNameComponent;