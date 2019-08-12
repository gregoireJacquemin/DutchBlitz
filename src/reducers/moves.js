import {card0} from "../containers/card"

const initState = {
    dutchPiles: [card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0],

    playing: false,

    selectedCard: [card0],

    playerData: {
        nbCardsInDutchPiles: 0,
        blitzPile: [card0],
        leftPostPile: [card0],
        middlePostPile: [card0],
        rightPostPile: [card0],
        woodPile: [card0],
        hand: []
    },
    bot1Data: {
        nbCardsInDutchPiles: 0,
        blitzPile: [card0],
        leftPostPile: [card0],
        middlePostPile: [card0],
        rightPostPile: [card0],
        woodPile: [card0],
        hand: []
    },
    bot2Data: {
        nbCardsInDutchPiles: 0,
        blitzPile: [card0],
        leftPostPile: [card0],
        middlePostPile: [card0],
        rightPostPile: [card0],
        woodPile: [card0],
        hand: []
    },
    bot3Data: {
        nbCardsInDutchPiles: 0,
        blitzPile: [card0],
        leftPostPile: [card0],
        middlePostPile: [card0],
        rightPostPile: [card0],
        woodPile: [card0],
        hand: []
    },
}

const moves = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case 'DEAL':
            newState.playerData = changeState(newState.playerData, action.distribPlayer)
            newState.bot1Data = changeState(newState.bot1Data, action.distribBot1)
            newState.bot2Data = changeState(newState.bot2Data, action.distribBot2)
            newState.bot3Data = changeState(newState.bot2Data, action.distribBot3)
            break;
        case 'RESET':
            newState = initState
            break;
        case 'SELECT':
            newState.selectedCard = action.card
            console.log(newState.selectedCard)
            break;
        default:
            newState = initState
            break;
    }
    return newState
}

function changeState(XData, distribX) {
    XData = {
        blitzPile: distribX.blitz,
        leftPostPile: [distribX.deckShu[10]],
        middlePostPile: [distribX.deckShu[11]],
        rightPostPile: [distribX.deckShu[12]],
        woodPile: [card0],
        hand: distribX.deckShu.slice(13),
        nbCardsInDutchPiles: 0
    }
    return XData
}

export default moves