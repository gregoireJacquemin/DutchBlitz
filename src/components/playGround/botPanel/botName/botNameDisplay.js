import React from 'react'
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";

const piche = (props) => {
    const BotNameDisplay = props1 => {
        return(
            <Paper style={{
                backgroundColor: '#d0c3ce',
                width: '100%',
                height: '40px',
                border: '1px solid',
                borderColor: '#ff0000'
            }}>
                {props1.bot.name}
            </Paper>
        )}

    const mapStateToProps = state => {
        return({
            bot: state[props.data].bot
        })}

     connect(mapStateToProps,null)(BotNameDisplay)

    return <BotNameDisplay props1={props}/>
}

export default piche
