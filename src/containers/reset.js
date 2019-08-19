import React from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import {reset} from '../actions';
import RefreshIcon from '@material-ui/icons/Refresh';
const Reset = (props) => {
    return(
        <Button onClick={props.onClick} style={{
            backgroundColor: '#75add0',
            width: '100%',
            height: '140px',
            border: '1px solid',
            borderColor: 'rgba(0,0,0,0.94)',
            fontSize: '40px'
        }}>
            <RefreshIcon style={{ fontSize: 80}}/>
        </Button>
    )}

const mapDispatchToProps = dispatch => {
    return({
        onClick: () => {
            dispatch(reset())}
    })}

export default connect(null, mapDispatchToProps)(Reset)