import "./reset.css";
import "./style.css";
import "./header.css";
import "./character-ratings.css";
import "./character-cards.css";
import { Character } from "./types";
import { CharactersCardsProp } from "./types";
import React from "react";

export function CharactersRatings({ characters }: { characters: Character[] }) {
  const charactersClone = structuredClone(characters);
  return (
    <>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {charactersClone
              .sort((a: Character, b: Character) => a.votes - b.votes)
              .slice(4)
              .sort((a: Character, b: Character) => b.votes - a.votes)
              .map((characterInfo: Character, itemIndex: number) => {
                const adjustedIndex = itemIndex + 1;
                const isSecond = adjustedIndex % 2 === 0;
                return (
                  <tr
                    key={characterInfo.name}
                    className={`character ${isSecond ? "light" : "dark"}`}
                  >
                    <td>{characterInfo.name}</td>
                    <td>{characterInfo.skillset}</td>
                    <td>{characterInfo.votes}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
}

class CharactersCards extends React.Component<CharactersCardsProp> {
  render() {
    const { FMAcharacters } = this.props;
    const charactersClone = structuredClone(FMAcharacters);
    return (
      <>
        <section id="character-cards">
          {charactersClone.map((characterEntry: Character) => {
            return (
              <div key={characterEntry.name} className="card">
                {/*<!-- Card -->*/}
                <div className="card-titles">
                  {/*<!-- name -->*/}
                  <h3>{characterEntry.name}</h3>
                  {/*<!-- nickName or nickname doesn't exist -->*/}
                  <h4>{characterEntry.nickName}</h4>
                </div>
                {/*<!-- imageUrl -->*/}
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
                {/*<!-- description -->*/}
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
