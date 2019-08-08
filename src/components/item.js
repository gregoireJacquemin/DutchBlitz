import React from 'react'
import Button from '@material-ui/core/Button';

const Item = () => (
    <Button onClick={
        () => console.log('jhfku')
    }
    style={{
        backgroundColor: '#d0c3ce',
        width: '100%',
        height: '100%',
        border: '1px solid',
        borderColor: '#ff0000'
    }}>
        Press
    </Button>
)

export default Item