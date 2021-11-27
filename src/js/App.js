import React from "react";
import Card from "./component/Card/Card";
import { getJson, getRandomNumer } from "./Utils/Utils";
import { API } from "./config";
import "./App.scss";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            experience: [],
            result: ["win", "lose"],
        };
    }

    componentDidMount() {
        this.getPokemon(this.props.count);
    }

    showTheWinner() {
        if (this.state.experience.length == 0) return;

        this.state.experience[0] > this.state.experience[1]
            ? console.log("Player 1 win")
            : console.log("Player 2 win");
    }
    render() {
        this.showTheWinner();
        return (
            <div>
                <div className="player">
                    <p className="player__number">
                        Player 1
                        <span className="player__experience">
                            Experience : {this.state.experience[0]}
                        </span>
                    </p>
                    <p
                        className={`player__result player__result--${
                            this.state.result[0] || "lose"
                        }`}
                    >
                        {this.state.result[0]}
                    </p>
                    <Card card={this.state.card[0]} />
                </div>
                <div className="player">
                    <p className="player__number">
                        Player 2
                        <span className="player__experience">
                            Experience : {this.state.experience[1]}
                        </span>
                    </p>
                    <p
                        className={`player__result player__result--${
                            this.state.result[1] || "lose"
                        }`}
                    >
                        {this.state.result[1]}
                    </p>
                    <Card card={this.state.card[1]} />
                </div>
            </div>
        );
    }

    async getPokemon(count = 4) {
        let url = [];
        for (let index = 0; index < count; index++) {
            url.push(getJson(`${API}/${getRandomNumer()}`));
        }

        const data = await Promise.all(url);
        // .base_experience

        const experience = [
            data.slice(0, count / 2).reduce((result, curr) => {
                return result + curr.base_experience;
            }, 0),
            data.slice(count / 2, data.length + 1).reduce((result, curr) => {
                return result + curr.base_experience;
            }, 0),
        ];

        const result = [
            experience[0] > experience[1] ? "win" : "lose",
            experience[0] < experience[1] ? "win" : "lose",
        ];
        this.setState((state) => {
            return {
                card: [
                    data.slice(0, count / 2),
                    data.slice(count / 2, data.length + 1),
                ],
                experience: experience,
                result: result,
            };
        });
    }
}
