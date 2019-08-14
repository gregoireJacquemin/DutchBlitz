import {connect} from 'react-redux'
import pile from "../../../containers/pile";
import {isMoveAllowed} from "../../../reducers/isAllowed";
import {card0} from "../../../containers/card";


function BotMove(props, XData, index, dutchPiles) {
    console.log('jouuuuuuuue')
    const listMoveFrom = ['rightPostPile', 'middlePostPile', 'leftPostPile', 'blitzPile', 'woodPile']
    const listMoveTo = dutchPiles.concat(XData.rightPostPile, XData.middlePostPile, XData.leftPostPile)
    let currentCard
    let currentPile
    let panel
    let name
    let card

    for (let i = 0; i < listMoveFrom.length; i++) {
        currentPile = listMoveFrom[i]
        currentCard = XData[listMoveFrom[i]][XData[listMoveFrom[i]].length - 1]
        for (let j = 0; j < listMoveTo.length; j++) {
            if (j < 16) panel = name = 'dutch'
            else {
                panel = 'player'
                if (j === 16) name = 'rightPostPile'
                else if (j === 17) name = 'middlePostPile'
                else name = 'leftPostPile'
            }
            card = listMoveTo[j]
            console.log('bamba')
            if (/*isMoveAllowed(action, currentCard, currentPile) !== '0'*/ true) break;
        }
    }
    props.fonc(card, panel, name)
}

const mapDispatchToProps = dispatch => {
    return({
        fonc: (card, panel, name) => {dispatch(pile(card, panel, name))}
    })
}


export default connect(null,mapDispatchToProps)(BotMove)