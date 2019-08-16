import {Card} from "../containers/card";
import {card0} from '../containers/card'

export const pile = (card, panel, name) => ({
    type: 'SELECT',
    card,
    panel,
    name
})

export const deal = () => ({
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

export const botMove = (botTry, card, pile, data) => ({
    type: 'BOTMOVE',
    botTry,
    card,
    pile,
    data
})

export const changeName = (name) => ({
    type: 'NAME',
    name
})

export const pause = () => ({
    type: 'PAUSE'
})

function buildDeck() {
    const colors = ['#ca0000', '#008af5', '#00e200', '#cece00']
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
    let blitz = [card0]
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