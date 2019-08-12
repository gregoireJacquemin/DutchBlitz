import React from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { deal } from '../actions';

const Deal = (props) => {
    return(
        <Button onClick={props.onClick}
                style={{
                    backgroundColor: '#d0c3ce',
                    width: '100%',
                    height: '140px',
                    border: '1px solid',
                    borderColor: '#ff0000'
        }}>
            deal
        </Button>
)}

const mapDispatchToProps = dispatch => {
    return({
        onClick: (distribPlayer, distribBot1, distribBot2, distribBot3) => {
        dispatch(deal(distribPlayer, distribBot1, distribBot2, distribBot3))}
})}

export default connect(null, mapDispatchToProps)(Deal)