import React from 'react'
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";

const BotNameDisplay = props => {
    return(
        <Button disabled style={{
            backgroundColor: '#c3c3c3',
            width: '100%',
            height: '40px',
            border: '1px solid',
            borderColor: '#000000',
            textAlign: 'center',
            color: '#000000'
        }}>
            {props.state[props.data].bot.name}
        </Button>
    )}

const mapStateToProps = state => {
    return({
        state: state
    })}

export default connect(mapStateToProps,null)(BotNameDisplay)