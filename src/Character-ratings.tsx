import "./character-ratings.css";
import { Character } from "./types";

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
              .sort((a, b) => b.votes - a.votes)
              .slice(0, 5)
              .map((characterInfo, itemIndex) => {
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
