import React, {useEffect} from "react";
import {Dialog} from "@material-ui/core/index";
import {DialogActions} from "@material-ui/core/index";
import {DialogContent} from "@material-ui/core/index";
import {Button} from "@material-ui/core/index";
import {DialogContentText} from "@material-ui/core/index";
import {reset} from "../../actions";
import {connect} from 'react-redux'
import first from './first.svg'
import second from './second.svg'
import third from './third.svg'
import poop from './poop.svg'
import empty from '../../containers/pile/empty.svg'

const Blitz = props => {

    const [open, setOpen] = React.useState(false)
    let playerBlitz

    const pointsPlayer = props.playerData.nbCardsInDutchPiles - 2 * (props.playerData.blitzPile.length - 1)
    const pointsBot1 = props.bot1Data.nbCardsInDutchPiles - 2 * (props.bot1Data.blitzPile.length - 1)
    const pointsBot2 = props.bot2Data.nbCardsInDutchPiles - 2 * (props.bot2Data.blitzPile.length - 1)
    const pointsBot3 = props.bot3Data.nbCardsInDutchPiles - 2 * (props.bot3Data.blitzPile.length - 1)

    const rankList = [{name: props.playerData.name.toUpperCase(), points: pointsPlayer}, {name: props.bot1Data.bot.name, points: pointsBot1}, {name: props.bot2Data.bot.name, points: pointsBot2}, {name: props.bot3Data.bot.name, points: pointsBot3}]

    rankList.sort((a,b) => (a.points > b.points) ? -1 : (a.points === b.points) ? ((a.name > b.name) ? 1 : -1) : 1)

    const prize = [first, second, third, poop]

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
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} fullWidth>
                <DialogContent>
                    <div style={{textAlign: 'center', fontSize: '120px'}}>BLITZ !</div>
                    <DialogContentText>
                        <div style={{textAlign: 'center', color: '#000000'}}>
                            player who blitzed : {playerBlitz}
                        </div>
                        <div style={{fontSize: '35px', color: '#000000'}}>
                            RANKING:
                            {rankList.map ((object,index) => (
                                <div key={index} style={{display: 'flex', alignItems: 'center'}}>
                                    <img src={prize[index]} className="App-logo" alt="" style={{height: '80px', width: '80px'}}/>
                                    {rankList[index].name}: {rankList[index].points} points
                                </div>
                            ))}
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        play again
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