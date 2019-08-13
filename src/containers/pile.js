import React from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {pile} from '../actions'

const Pile = props => {
    const card=props.card
    const thickness = (props.panel === 'player' && card.color === props.selectedCard.color && card.value === props.selectedCard.value && props.selectedPile === props.name) ? 5:1
    return(
        <Grid item xs={2}>
            <Button onClick={() => props.onClick(card, props.panel, props.name)} style={{
                border: `${thickness}px solid`,
                height: '150px',
                width: '89px',
                backgroundColor: card.color
            }}>
                {card.value}
                {card.gender}
            </Button>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => {
    return({
        onClick: (card, panel, name) => {
            dispatch(pile(card, panel, name))
        }
    })}

const mapStateToProps = state => {
    return({
        selectedCard: state.selectedCard,
        selectedPile: state.selectedPile
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Pile)