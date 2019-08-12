import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const BotName = () => (
    <Grid item xs={12} style={{height: '70px', padding: '0px'}} container spacing={0}>
        <Grid item xs={4} style={{padding: '0px'}}>
            <Button onClick={
                () => console.log('jhfku')
            }
                    style={{
                        backgroundColor: '#d0c3ce',
                        width: '100%',
                        height: '70px',
                        border: '1px solid',
                        borderColor: '#ff0000'
                    }}>
                Press
            </Button>
        </Grid>
        <Grid item xs={8}>
            <Button onClick={
                () => console.log('jhfku')
            }
                    style={{
                        backgroundColor: '#d0c3ce',
                        width: '100%',
                        height: '70px',
                        border: '1px solid',
                        borderColor: '#ff0000'
                    }}>
                Press
            </Button>
        </Grid>
    </Grid>

)

export default BotName