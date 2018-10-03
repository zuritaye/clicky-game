import React, {Component} from 'react';
import ClickItem from "../ClickItem";
import Container from "../Container";
import Footer from "../Footer";
import Game from "../Game";
import Header from "../Header";
import Nav from "../Nav";
import data from "../../data.json";

class Game extends Component {
    state = { 
        data, 
        score: 0,
        topScore: 0,
    };

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    handleCorrectGuess = newData => {
        const { topScore, score } =this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, TopScore);
        

        this.setState({
            data: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore

        })
    };

    handleIncorrectGuess = data => {
        this.setState({
            data: this.resetData(data),
            score: 0
        })
    };

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false}) );
        return this.shuffleData(resetData);
    };

    
}

export default Game;