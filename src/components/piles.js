import React from 'react';
import Card from './card';
import Button from "@material-ui/core/Button";

const Pile = (Card) => {
    return(
        <Button style={{
            border: '1px solid',
            height: '100px',
            backgroundColor: Card.color,
        }}>
            {Card.value}
            {Card.gender}
        </Button>
    )}

    export default Pile