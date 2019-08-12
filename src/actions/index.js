export const move = move => ({
    type: 'MOVE',
    move
})

export const draw = draw => ({
    type: 'DRAW',
    draw
})

export const deal = () => ({
    type: 'DEAL',
})

export const reset = () => ({
    type: 'RESET'
})

export const pause = pause => ({
    type: 'PAUSE',
    pause
})