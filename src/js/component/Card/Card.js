import React, { Component } from "react";
import "./Card.scss";

import { getRandomNumer, getJson } from "../../Utils/Utils.js";
import { API } from "../../config.js";

class Card extends Component {
    // componentDidMount() {
    //     const { count } = this.props;
    //     this.getPokemon(count);
    // }

    render() {
        const pokemon = this.props.card?.map((data, index) => {
            return (
                <div className="card" key={index}>
                    <h2 className="card__name">{data.name}</h2>
                    <img
                        className="card__img"
                        src={data.sprites.back_default}
                    />
                    <p className="card__stats card__stats--bold ">
                        Type:{" "}
                        {data.types.map((type) => type.type.name).join(", ")}
                    </p>
                    <p className="card__stats">exp : {data.base_experience}</p>
                </div>
            );
        });
        return <div className="player__deck">{pokemon}</div>;
    }

    // async getPokemon(count = 4) {
    //     let url = [];
    //     for (let index = 0; index < count; index++) {
    //         url.push(getJson(`${API}/${getRandomNumer()}`));
    //     }

    //     const data = await Promise.all(url);
    //     // .base_experience
    //     this.setState((state) => {
    //         return {
    //             card: data,
    //             experience: 20,
    //         };
    //     });
    // }
}

export default Card;
