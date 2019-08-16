import React, {useEffect} from "react";
import {Dialog} from "@material-ui/core";
import {DialogActions} from "@material-ui/core";
import {DialogContent} from "@material-ui/core";
import {DialogTitle} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {DialogContentText} from "@material-ui/core";
import {reset} from "../actions";
import {connect} from 'react-redux'

const Blitz = props => {
    const [open, setOpen] = React.useState(false)
    let playerBlitz
    let rank1
    let rank2
    let rank3
    let rank4

    if (props.playerData.blitzPile.length === 1) playerBlitz = props.playerData.name
    else if (props.bot1Data.blitzPile.length === 1) playerBlitz = props.bot1Data.bot.name
    else if (props.bot2Data.blitzPile.length === 1) playerBlitz = props.bot2Data.bot.name
    else playerBlitz = props.bot3Data.bot.name


    function handleClose() {
        setOpen(false)
        props.foncReset()
    }

    useEffect(() => {
        if(props.blitz) setOpen(true)
    }, [props.blitz])

    return(
        <div>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>{'blitz'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div>
                            player who blitzed : {playerBlitz}
                        </div>
                        <div>
                            ranking:
                            <div>
                                {props.playerData.name}: {props.playerData.nbCardsInDutchPiles - 2 * (props.playerData.blitzPile.length - 1)} points
                            </div>
                            <div>
                                {props.bot1Data.bot.name}: {props.bot1Data.nbCardsInDutchPiles - 2 * (props.bot1Data.blitzPile.length - 1)} points
                            </div>
                            <div>
                                {props.bot2Data.bot.name}: {props.bot2Data.nbCardsInDutchPiles - 2 * (props.bot2Data.blitzPile.length - 1)} points
                            </div>
                            <div>
                                {props.bot3Data.bot.name}: {props.bot3Data.nbCardsInDutchPiles - 2 * (props.bot3Data.blitzPile.length - 1)} points
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return({
        foncReset: () => dispatch(reset())
    })
}

export default connect(null,mapDispatchToProps)(Blitz)