import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {pile} from '../actions'

const Pile = props => {
    const card=props.card.state
    return(
        <Grid item xs={2}>
            <Button onClick={() => props.onClick(card)} style={{
                border: '1px solid',
                height: '100px',
                backgroundColor: card.color
            }}>
                {card.value}
                {card.gender}
            </Button>
        </Grid>
    )}

const mapDispatchToProps = dispatch => {
    return({
        onClick: (card) => {
            dispatch(pile(card))
        }
    })}

    export default connect(null, mapDispatchToProps)(Pile)