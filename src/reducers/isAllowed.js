
export function isClickAllowed(action) {
    if (action.panel === 'player') return true
    else return false
}

 export const isMoveAllowed = (props) => {
    console.log(props)
    if (props.action.panel === 'dutch') {
        if ((props.action.card.color === props.card.color && props.action.card.value + 1 === props.card.value) || (props.action.card.value === '' && props.card.value === 1)) return '1'
        else return '0'
    } else if (props.action.panel === 'player' && (props.action.name === 'leftPostPile' || props.action.name === 'middlePostPile' || props.action.name === 'rightPostPile')) {
        if ((props.action.card.gender !== props.card.gender && props.action.card.value === props.card.value + 1) || (props.action.card.value === '' && props.card.value !== '')) return '2'
        else return '0'
    } else if (props.pile === props.action.name && props.pile === 'woodPile') {
        return '3'
    } else return '0'
}
