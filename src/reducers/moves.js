import {Card} from "../components/card";
import {card0} from "../components/card"

const initState = {
    dutchPiles: [card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0,card0],

    playing: false,

    playerData: {
        nbCardsInDutchPiles: 0,
        blitzPile: [],
        leftPostPile: [],
        middlePostPile: [],
        rightPostPile: [card0],
        woodPile: [],
        hand: []
    },
    bot1Data: {
        nbCardsInDutchPiles: 0,
        blitzPile: [],
        leftPostPile: [],
        middlePostPile: [],
        rightPostPile: [],
        woodPile: [],
        hand: []
    },
    bot2Data: {
        nbCardsInDutchPiles: 0,
        blitzPile: [],
        leftPostPile: [],
        middlePostPile: [],
        rightPostPile: [],
        woodPile: [],
        hand: []
    },
    bot3Data: {
        nbCardsInDutchPiles: 0,
        blitzPile: [],
        leftPostPile: [],
        middlePostPile: [],
        rightPostPile: [],
        woodPile: [],
        hand: []
    },
}

const moves = (state = initState, action) => {
    switch(action.type) {
        case 'DEAL':
            const deckOriginal = buildDeck()
            let deck = shuffleArray(deckOriginal)
            let blitz = []
            for (let i = 0; i < 10; i++) {
                blitz.push(deck[i])
            }
            return {
        ...state,
                playerData: {
                blitzPile: blitz,
                    leftPostPile: [deck[10]],
                    middlePostPile: [deck[11]],
                    rightPostPile: [deck[12]],
                    hand: deck.slice(13)
            }
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
        if (color === '#00ff00' || color === '#ffff00') gender = 'female'
        else gender = 'male'
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

export default moves