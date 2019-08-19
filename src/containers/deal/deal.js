import React from 'react';
import Button from "@material-ui/core/Button/index";
import { connect } from 'react-redux';
import { deal } from '../../actions';
import card from './card.svg'

const Deal = (props) => {
    return(
        <Button onClick={props.onClick}
                style={{
                    backgroundColor: '#8cd063',
                    width: '100%',
                    height: '140px',
                    border: '1px solid',
                    borderColor: '#000000',
                    fontSize: '40px'
        }}>
            <img src={card} className="App-logo" alt="" style={{height: '80px', width: '80px'}}/>
        </Button>
)}

const mapDispatchToProps = dispatch => {
    return({
        onClick: () => {
        dispatch(deal())}
    })
}

export default connect(null, mapDispatchToProps)(Deal)