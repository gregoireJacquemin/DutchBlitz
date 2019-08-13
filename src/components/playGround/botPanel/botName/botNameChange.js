import React from 'react'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {changeBot} from "../../../../actions";

const BotNameChange = (props) => {
    return(
        <Button onClick={props.onClick}
                style={{
                    backgroundColor: '#d0c3ce',
                    width: '100%',
                    height: '40px',
                    border: '1px solid',
                    borderColor: '#ff0000'
                }}>
            change
        </Button>
    )}

const mapDispatchToProps = dispatch => {
    return({
        onClick: (data, index) => {
            dispatch(changeBot(data, index))}
    })}

export default connect(null, mapDispatchToProps)(BotNameChange)