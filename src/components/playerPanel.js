import React from 'react';
import Grid from '@material-ui/core/Grid'
import Pile from "./pile";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {card0} from './card'

const PlayerPanel = (props) => {
    console.log(props)
    return(
        <Grid container spacing={1}>
            <Grid item xs={12} style={{height: '70px'}}>
                de
            </Grid>
            <Grid item x={12} style={{height: '200px'}} container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                {[0,1,2,3,4].map(value => (
                    <Grid key={value} item xs={2}>
                        <Pile card={props}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )}

const mapStateToProps = state => {
    return({
        moves: state.moves
    })}

    PlayerPanel.defaultProps = {
    props: card0
    }

export default connect(mapStateToProps,null) (PlayerPanel)