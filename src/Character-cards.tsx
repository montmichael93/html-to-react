import "./character-cards.css";
import React from "react";
import { Character } from "./types";

export interface CharactersCardsProp {
  FMACharacters: Character[];
}

class CharactersCards extends React.Component<CharactersCardsProp> {
  render() {
    const { FMACharacters } = this.props;
    const charactersClone = structuredClone(FMACharacters);
    return (
      <>
        <section id="character-cards">
          {charactersClone.map((characterEntry) => {
            return (
              <div key={characterEntry.name} className="card">
                <div className="card-titles">
                  <h3>{characterEntry.name}</h3>
                  <h4>{characterEntry.nickName}</h4>
                </div>
                <img
                  src={
                    characterEntry.imageUrl.includes("revision")
                      ? characterEntry.imageUrl.replace(
                          characterEntry.imageUrl
                            .match(/revision.*/g)[0]
                            .substring(0),
                          ""
                        )
                      : characterEntry.imageUrl
                  }
                />
                <p>{characterEntry.background}</p>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}

export { CharactersCards };
