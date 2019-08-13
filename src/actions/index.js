import {Card} from "../containers/card";

export const pile = (card, panel, name) => ({
    type: 'SELECT',
    card,
    panel,
    name
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

export const changeBot = (data, index) => ({
    type: 'CHANGE BOT',
    data,
    index
})

export const pause = pause => ({
    type: 'PAUSE',
    pause
})

function buildDeck() {
    const colors = ['#ff0000', '#008af5', '#00e200', '#e4e400']
    const deck = []
    colors.forEach((color) => {
        let gender
        if (color === colors[2] || color === colors[3]) gender = 'f'
        else gender = 'm'
        for (let i = 1; i <= 10; i++) {
            const card = new Card(color, i, gender)
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