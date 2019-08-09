import React from 'react';
import Button from "@material-ui/core/Button";

const Pile = props => {
    const card=props.card.state
    console.log(card)
    return(
        <Button style={{
            border: '1px solid',
            height: '100px',
            backgroundColor: card.color
        }}>
            {card.value}
            {card.gender}
        </Button>
    )}

    export default Pile