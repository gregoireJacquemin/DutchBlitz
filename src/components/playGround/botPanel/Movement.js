import {isMoveAllowed} from "../../../reducers/isAllowed";

const Movement = (listMoveFrom, listMoveTo, proba) => {

    let currentCard
    let currentPile
    let panel
    let name
    let card
    let botTry

    for (let i = 0; i < listMoveFrom.length; i++) {
        currentPile = listMoveFrom[i].pile
        currentCard = listMoveFrom[i].card
        for (let j = 0; j < listMoveTo.length; j++) {
            if (j < 16) {
                panel = 'dutch'
                name = j
            } else {
                panel = 'player'
                if (j === 16) name = 'rightPostPile'
                else if (j === 17) name = 'middlePostPile'
                else name = 'leftPostPile'
            }
            card = listMoveTo[j]
            botTry = {panel: panel, name: name, card: card}
            if (isMoveAllowed({action: botTry, card: currentCard, pile: currentPile}) !== '0') {
                const nbRandom = Math.floor(Math.random() * 4)
                if (proba >= nbRandom) return({botTry, currentCard, currentPile})
                else {
                    botTry = {panel: 'player', name: 'woodPile', card: currentCard}
                    return({botTry, currentCard, currentPile})
                }
            }
        }
    }
    botTry = {panel: 'player', name: 'woodPile', card: currentCard}
    return({botTry, currentCard, currentPile})
}

export default Movement