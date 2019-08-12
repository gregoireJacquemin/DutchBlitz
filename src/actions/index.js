import {Card} from "../containers/card";

export const pile = (card) => ({
    type: 'SELECT',
    card
})

export const draw = () => ({
    type: 'DRAW'
})

export const deal = (distribPlayer, distribBot1, distribBot2, distribBot3) => ({
    type: 'DEAL',
    distribPlayer: distribution(),
    distribBot1: distribution(),
    distribBot2: distribution(),
    distribBot3: distribution()
})

export const reset = () => ({
    type: 'RESET'
})

export const pause = pause => ({
    type: 'PAUSE',
    pause
})

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

function distribution() {
    const deckOri = buildDeck()
    const deckShu = shuffleArray(deckOri)
    const blitz = buildBlitz(deckShu)
    return {deckShu, blitz}
}