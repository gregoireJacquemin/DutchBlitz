import Grid from "@material-ui/core/Grid";
import Pile from "./pile/pile";
import {card0} from "./pile/card";
import React from "react";


const DutchPanel = () => {
    return(
        <Grid item xs={12} container spacing={0} justify={"space-evenly"} alignItems={"center"} style={{border: '1px solid'}}>
            <Grid item xs={12}  container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                {[0,1,2,3,4,5,6,7].map(value => (
                    <Grid key={value} item xs={1}>
                        <Pile card={card0}/>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12}  container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                {[0,1,2,3,4,5,6,7].map(value => (
                    <Grid key={value} item xs={1}>
                        <Pile card={card0}/>
                    </Grid>
                ))}
             </Grid>
        </Grid>
    )}

    export default DutchPanel