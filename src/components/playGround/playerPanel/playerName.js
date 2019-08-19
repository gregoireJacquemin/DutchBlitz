import React from "react";
import {Dialog} from "@material-ui/core";
import {Button} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from '@material-ui/core/DialogActions'
import TextField from "@material-ui/core/TextField";
import {connect} from 'react-redux'
import {changeName} from "../../../actions";


const PlayerName = props => {

    const [open, setOpen] = React.useState(false)
    const [playerName, setPlayerName] = React.useState('change name')

    function handleClick(){
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }
    function handleChange(value) {
        setPlayerName(value)
        props.cgName(value)
    }

    return(
        <div>
            <Button onClick={handleClick}>
                {playerName}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Your Name</DialogTitle>
                <DialogContent>
                    <form id = 'my form'>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="your name"
                            type="name"
                            form='my form'
                            onChange={event => handleChange(event.target.value)}
                            fullWidth
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return({
        cgName: (name) => dispatch(changeName(name))
    })
}

export default connect(null,mapDispatchToProps) (PlayerName)