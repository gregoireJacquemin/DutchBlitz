
export function isClickAllowed(action) {
    if (action.panel === 'player') return true
    else return false
}

export function isMoveAllowed(action, card, pile) {
    if (action.panel === 'dutch') {
        if ((action.card.color === card.color && action.card.value + 1 === card.value) || (action.card.value === '' && card.value === 1)) return '1'
    }
    else if (action.panel === 'player' && (action.name === 'leftPostPile' || action.name === 'middlePostPile' || action.name === 'rightPostPile')) {
        if ((action.card.gender !== card.gender && action.card.value === card.value + 1) || (action.card.value === '' && card.value !== '' )) return '2'
    }
    else if (pile === action.name && pile === 'woodPile'){
        return '3'
    }
    else return '0'
}