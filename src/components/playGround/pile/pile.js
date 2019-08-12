import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Pile = props => {
    const card=props.card.state
    return(
        <Grid item xs={2}>
            <Button style={{
                border: '1px solid',
                height: '100px',
                backgroundColor: card.color
            }}>
                {card.value}
                {card.gender}
            </Button>
        </Grid>
    )}

    export default Pile