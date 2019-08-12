import {Card} from "../components/playGround/pile/card";
import {card0} from "../components/playGround/pile/card"

const initState = {
    dutchPiles: [card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0],

    playing: false,

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
    switch(action.type) {
        case 'DEAL':
            const deckOriginal = buildDeck()
            let distribPlayer = distribution(deckOriginal)
            let distribBot1 = distribution(deckOriginal)
            let distribBot2 = distribution(deckOriginal)
            let distribBot3 = distribution(deckOriginal)
            return {
                ...state,
                playerData: {
                    blitzPile: distribPlayer.blitz,
                    leftPostPile: [distribPlayer.deck[10]],
                    middlePostPile: [distribPlayer.deck[11]],
                    rightPostPile: [distribPlayer.deck[12]],
                    woodPile: [card0],
                    hand: distribPlayer.deck.slice(13)
                }
            }
        case 'RESET':
            return {
                ...initState
            }
        default:
            return state
    }
}

function buildDeck() {
    const colors = ['#ff0000', '#0000ff', '#00ff00', '#ffff00']
    const deck = []
    colors.forEach((color) => {
        let gender
        if (color === '#00ff00' || color === '#ffff00') gender = 'f'
        else gender = 'm'
        for (let i = 1; i <= 10; i++) {
            const card = new Card({color: color, value: i,gender: gender})
            deck.push(card)
        }
    })
    return deck
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function buildBlitz(deck) {
    let blitz = []
    for (let i = 0; i < 10; i++) {
        blitz.push(deck[i])
    }
    return blitz
}

function distribution(deckOri) {
    let deck = shuffleArray(deckOri)
    let blitz = buildBlitz(deck)
    return {deck, blitz}
}

//function changeState(state) {
//    newState = deepCopy(state)

//}

export default moves