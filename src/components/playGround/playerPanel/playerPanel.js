import React from 'react';
import Grid from '@material-ui/core/Grid'
import Pile from "../../../containers/pile";
import { connect } from 'react-redux';
import PlayerName from "./playerName";

const PlayerPanel = (props) => {
    return(
        <Grid item xs={6} style={{border: '1px solid', padding: '0px', margin: '0px'}} container spacing={1}>
            <Grid item xs={12} style={{height: '40px'}}>
                <PlayerName/>
            </Grid>
            <Grid item x={12} style={{height: '200px'}} container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                <Pile card={props.playerData.woodPile[props.playerData.woodPile.length - 1]} panel={'player'} name={'woodPile'}/>
                <Pile card={props.playerData.leftPostPile[props.playerData.leftPostPile.length - 1]} panel={'player'} name={'leftPostPile'}/>
                <Pile card={props.playerData.middlePostPile[props.playerData.middlePostPile.length - 1]} panel={'player'} name={'middlePostPile'}/>
                <Pile card={props.playerData.rightPostPile[props.playerData.rightPostPile.length - 1]} panel={'player'} name={'rightPostPile'}/>
                <Pile card={props.playerData.blitzPile[props.playerData.blitzPile.length - 1]} panel={'player'} name={'blitzPile'}/>
            </Grid>
        </Grid>
    )}

const mapStateToProps = state => {
    return({
        playerData: state.playerData
    })}

export default connect(mapStateToProps,null) (PlayerPanel)