import React from 'react';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            value: this.props.value,
            gender: this.props.gender
        }
    }

}

export const card0 = new Card({color: '#ffffff', value: '',gender: ''})

export default card0