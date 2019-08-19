import React from 'react'
import Grid from "@material-ui/core/Grid";
import BotNameDisplay from "./botNameDisplay";
import BotNameChange from "./botNameChange";

const BotName = props => (
    <Grid item xs={12} style={{height: '40px', padding: '0px', backgroundColor: props.color}} container spacing={0}>
        <Grid item xs={4} style={{padding: '0px'}}>
            <BotNameDisplay {...props}/>
        </Grid>
        <Grid item xs={8}>
            <BotNameChange {...props}/>
        </Grid>
    </Grid>

)

export default BotName