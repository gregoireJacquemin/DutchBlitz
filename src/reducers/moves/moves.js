import {card0} from "../../containers/card"
import {isClickAllowed} from "./isAllowed";
import {isMoveAllowed} from "./isAllowed";
import {listBot} from "../../components/playGround/botPanel/botName/bot";

const initState = {
    dutchPiles: [card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0],

    playing: false,

    selectedCard: card0,

    selectedPile: '',

    playerData: {
        name: '',
        nbCardsInDutchPiles: 0,
        blitzPile: [card0],
        leftPostPile: [card0],
        middlePostPile: [card0],
        rightPostPile: [card0],
        woodPile: [card0],
        hand: []
    },
    bot1Data: {
        bot: listBot[0],
        nbCardsInDutchPiles: 0,
        blitzPile: [card0],
        leftPostPile: [card0],
        middlePostPile: [card0],
        rightPostPile: [card0],
        woodPile: [card0],
        hand: []
    },
    bot2Data: {
        bot: listBot[1],
        nbCardsInDutchPiles: 0,
        blitzPile: [card0],
        leftPostPile: [card0],
        middlePostPile: [card0],
        rightPostPile: [card0],
        woodPile: [card0],
        hand: []
    },
    bot3Data: {
        bot: listBot[2],
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
            newState.dutchPiles = initState.dutchPiles
            break;
        case 'RESET':
            newState = initState
            break;
        case 'SELECT':
            if (state.selectedCard.value === card0.value && state.selectedPile === '') {
                if (isClickAllowed(action)) {
                    newState.selectedCard = action.card
                    newState.selectedPile = action.name
                }
            } else {
                switch(isMoveAllowed(action, state.selectedCard, state.selectedPile)) {
                    case '1':
                        newState.playerData.nbCardsInDutchPiles ++
                        newState.playerData[state.selectedPile].pop()
                        newState.dutchPiles[action.name] = state.selectedCard
                        newState.selectedCard = card0
                        newState.selectedPile = ''
                        break;
                    case '2':
                        newState.playerData[state.selectedPile].pop()
                        newState.playerData[action.name].push(state.selectedCard)
                        newState.selectedCard = card0
                        newState.selectedPile = ''
                        break;
                    case '3':
                        if (state.playerData.hand.length !== 0) {
                            const cardsDrawn = Math.min(state.playerData.hand.length, 3)
                            newState.playerData.woodPile = state.playerData.woodPile.concat(state.playerData.hand.slice(0 , cardsDrawn))
                            newState.playerData.hand = state.playerData.hand.slice(cardsDrawn)
                        } else {
                            newState.playerData.woodPile = [card0]
                            newState.playerData.hand = state.playerData.woodPile.slice(1)
                        }
                        newState.selectedCard = card0
                        newState.selectedPile = ''
                        break;
                    default:
                        newState.selectedCard = card0
                        newState.selectedPile = ''
                        break;
                }
            }
            break;
        case 'CHANGE BOT':
            if (action.index !== 6) newState[action.data].bot = listBot[action.index + 1]
            else newState[action.data].bot = listBot[0]
            break;
        default:
            break;
    }
    return newState
}

function changeState(XData, distribX) {
    XData = {
        blitzPile: distribX.blitz,
        leftPostPile: [card0, distribX.deckShu[10]],
        middlePostPile: [card0, distribX.deckShu[11]],
        rightPostPile: [card0, distribX.deckShu[12]],
        woodPile: [card0],
        hand: distribX.deckShu.slice(13),
        nbCardsInDutchPiles: 0
    }
    return XData
}

export default moves