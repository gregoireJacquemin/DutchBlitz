import React from 'react';
import BotName from './botName/botName';
import Grid from '@material-ui/core/Grid'
import Pile from "../../../containers/pile/pile";
import {connect} from "react-redux";
import Movement from "./Movement";
import {botMove} from "../../../actions";

class BotPanel extends React.Component{
    constructor(interval){
        super(interval);
        this.state = {
            interval: interval
        };
    }

    componentDidMount() {

        const nb = this.props.nb
        let XData
        let data


        const time = 2000

        this.setState({interval: setInterval(() => {

                if (nb === 1) {
                    XData = this.props.state.bot1Data
                    data = 'bot1Data'
                } else if (nb === 2) {
                    XData = this.props.state.bot2Data
                    data = 'bot2Data'
                } else {
                    XData = this.props.state.bot3Data
                    data = 'bot3Data'
                }
                const dutchPiles = this.props.state.dutchPiles
                const proba = XData.bot.vision

                if (!this.props.state.playing) return ('')
                else {

                    const listMoveFrom = [{pile: 'blitzPile', card: XData.blitzPile[XData.blitzPile.length - 1]},
                        {pile: 'rightPostPile', card: XData.rightPostPile[XData.rightPostPile.length - 1]},
                        {pile: 'middlePostPile', card: XData.middlePostPile[XData.middlePostPile.length - 1]},
                        {pile: 'leftPostPile', card: XData.leftPostPile[XData.leftPostPile.length - 1]},
                        {pile: 'woodPile', card: XData.woodPile[XData.woodPile.length - 1]}]
                    const listMoveTo = dutchPiles.concat(XData.rightPostPile[XData.rightPostPile.length - 1], XData.middlePostPile[XData.middlePostPile.length - 1], XData.leftPostPile[XData.leftPostPile.length - 1])

                    const Move = Movement(listMoveFrom, listMoveTo, proba)
                    this.props.fonc({...Move, data})
                }
            }, time)})
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }


    render() {
        const nb = this.props.nb
        let XData
        let data
        let index
        let color

        if (nb === 1) {
            XData = this.props.state.bot1Data
            data = 'bot1Data'
            index = XData.botIndex
            color = '#47a8f5'
        }
        else if (nb === 2) {
            XData = this.props.state.bot2Data
            data = 'bot2Data'
            index = XData.botIndex
            color = '#53e24d'
        }
        else{
            XData = this.props.state.bot3Data
            data = 'bot3Data'
            index = XData.botIndex
            color = '#ca2f35'
        }

        return(
            <Grid item xs={6} style={{border: '1px solid', borderColor:'#ffffff', padding: '0px'}} container spacing={0}>
                <BotName data={data} index={index} color={color}/>
                <Grid item x={12} style={{height: '200px', backgroundColor: '#262626'}} container spacing={0} justify={"space-evenly"} alignItems={"center"}>
                    <Pile card={XData.woodPile[XData.woodPile.length - 1]} panel={'bot'} name={'wood'}/>
                    <Pile card={XData.leftPostPile[XData.leftPostPile.length - 1]} panel={'bot'} name={'post'}/>
                    <Pile card={XData.middlePostPile[XData.middlePostPile.length - 1]} panel={'bot'} name={'post'}/>
                    <Pile card={XData.rightPostPile[XData.rightPostPile.length - 1]} panel={'bot'} name={'post'}/>
                    <Pile card={XData.blitzPile[XData.blitzPile.length - 1]} panel={'bot'} name={'blitz'}/>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return({
        state: state
    })}

const mapDispatchToProps = dispatch => {
    return({
        fonc: ({botTry, currentCard, currentPile, data}) => dispatch(botMove(botTry, currentCard, currentPile, data))
    })}

export default connect(mapStateToProps,mapDispatchToProps) (BotPanel)