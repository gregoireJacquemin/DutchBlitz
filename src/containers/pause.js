import React from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { pause } from '../actions';

const Pause = (props) => {
    return(
        <Button onClick={props.onClick}
                style={{
                    backgroundColor: '#d0c3ce',
                    width: '100%',
                    height: '140px',
                    border: '1px solid',
                    borderColor: '#ff0000'
                }}>
            play/pause
        </Button>
    )}

const mapDispatchToProps = dispatch => {
    return({
        onClick: () => {
            dispatch(pause())}
    })}

export default connect(null, mapDispatchToProps)(Pause)