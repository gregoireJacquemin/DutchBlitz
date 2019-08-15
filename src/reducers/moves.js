import {card0} from "../containers/card"
import {isClickAllowed} from "./isAllowed";
import {isMoveAllowed} from "./isAllowed";
import {listBot} from "../components/playGround/botPanel/botName/bot";

const initState = {
    dutchPiles: [card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0],

    selectedCard: card0,

    selectedPile: '',

    playing: false,

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
        botIndex: 0,
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
        botIndex: 1,
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
        botIndex: 2,
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
            newState.playerData = changeStatePlayer(newState.playerData, action.distribPlayer, state.playerData.name)
            newState.bot1Data = changeStateBot(newState.bot1Data, action.distribBot1, state.bot1Data)
            newState.bot2Data = changeStateBot(newState.bot2Data, action.distribBot2, state.bot2Data)
            newState.bot3Data = changeStateBot(newState.bot2Data, action.distribBot3, state.bot3Data)
            newState.dutchPiles = initState.dutchPiles
            break;
        case 'RESET':
            newState = initState
            break;
        case 'PAUSE':
            newState.playing = !state.playing
            break;
        case 'BOTMOVE':
            const moveNumber = isMoveAllowed({action: action.botTry, card: action.card, pile: action.pile});
            switch(moveNumber) {
                case '1':
                    newState[action.data].nbCardsInDutchPiles++
                    newState[action.data][action.pile].pop()
                    newState.dutchPiles[action.botTry.name] = action.card
                    break;
                case '2':
                    newState[action.data][action.pile].pop()
                    newState[action.data][action.botTry.name].push(action.card)
                    break;
                case '3':
                    if (state[action.data].hand.length !== 0) {
                        const cardsDrawn = Math.min(state[action.data].hand.length, 3)
                        newState[action.data].woodPile = state[action.data].woodPile.concat(state[action.data].hand.slice(0, cardsDrawn))
                        newState[action.data].hand = state[action.data].hand.slice(cardsDrawn)
                    } else {
                        newState[action.data].woodPile = [card0]
                        newState[action.data].hand = state[action.data].woodPile.slice(1)
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'SELECT':
            if (state.selectedCard.value === card0.value && state.selectedPile === '') {
                if (isClickAllowed(action)) {
                    newState.selectedCard = action.card
                    newState.selectedPile = action.name
                }
            } else {
                const moveNumber = isMoveAllowed({action: action, card: state.selectedCard, pile: state.selectedPile});
                switch(moveNumber) {
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
            if (action.index !== 6) {
                newState[action.data].bot = listBot[action.index + 1]
                newState[action.data].botIndex ++
            }
            else {
                newState[action.data].bot = listBot[0]
                newState[action.data].botIndex = 0
            }
            break;
        default:
            break;
    }
    return newState
}

function changeStatePlayer(XData, distribX, name) {
    XData = {
        name: name,
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

function changeStateBot(XData, distribX, botData) {
    XData = {
        bot: botData.bot,
        botIndex: botData.botIndex,
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