import React from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { pause } from '../actions';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const Pause = (props) => {
    if(props.playing) {
        return (
            <Button onClick={props.onClick}
                    style={{
                        backgroundColor: '#d03f46',
                        width: '100%',
                        height: '140px',
                        border: '1px solid',
                        borderColor: '#000000'
                    }}>
                <PauseIcon style={{ fontSize: 80}}/>
            </Button>
        )
    } else {
        return(
            <Button disabled={false} onClick={props.onClick}
                    style={{
                        backgroundColor: '#d03f46',
                        width: '100%',
                        height: '140px',
                        border: '1px solid',
                        borderColor: '#000000'
                    }}>
                <PlayArrowIcon style={{ fontSize: 80}}/>
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return({
        onClick: () => {
            dispatch(pause())}
    })}

const mapStateToProps = state => {
    return({
        playing: state.playing,
        dealt: state.cardsDealt
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Pause)