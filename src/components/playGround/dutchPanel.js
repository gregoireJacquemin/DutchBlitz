import Grid from "@material-ui/core/Grid";
import Pile from "../../containers/pile";
import React from "react";
import {connect} from "react-redux";


const DutchPanel = (props) => {
    return(
        <Grid item xs={12} container spacing={0} justify={"space-evenly"} alignItems={"center"} style={{border: '1px solid'}}>
            <Grid item xs={12}  container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                {[0,1,2,3,4,5,6,7].map(value => {
                    return (<Grid key={value} item xs={1}>
                        <Pile card={props.dutchPiles[value]} panel={'dutch'} name={value}/>
                    </Grid>)
                })}
            </Grid>
            <Grid item xs={12}  container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                {[8,9,10,11,12,13,14,15].map(value => (
                    <Grid key={value} item xs={1}>
                        <Pile card={props.dutchPiles[value]} panel={'dutch'} name={value}/>
                    </Grid>
                ))}
             </Grid>
        </Grid>
    )}

const mapStateToProps = state => {
    return({
        dutchPiles: state.dutchPiles
    })}

export default connect(mapStateToProps,null) (DutchPanel)