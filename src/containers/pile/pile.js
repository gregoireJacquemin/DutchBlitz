import React from 'react';
import Button from "@material-ui/core/Button/index";
import Grid from "@material-ui/core/Grid/index";
import {connect} from "react-redux";
import {pile} from '../../actions'
import mars from './mars.svg'
import venus from './venus.svg'
import empty from './empty.svg'

const Pile = props => {
    const card=props.card
    const thickness = (props.panel === 'player' && card.color === props.selectedCard.color && card.value === props.selectedCard.value && props.selectedPile === props.name) ? 5:0

    let icon
    if (card.gender === 'm') icon = mars
    else if (card.gender === 'f') icon = venus
    else icon = empty

    return(
        <Grid item xs={2}>
            <Button onClick={() => props.onClick(card, props.panel, props.name)} style={{
                border: `${thickness}px solid #ffffff`,
                height: '150px',
                width: '89px',
                backgroundColor: card.color,
                fontSize: '30px'
            }}>
                <div>
                    <div>
                        {card.value}
                    </div>
                    <div>
                        <img src={icon} className="App-logo" alt="" style={{height: '30px', width: '30px'}}/>
                    </div>
                </div>
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