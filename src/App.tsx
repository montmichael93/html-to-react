import "./reset.css";
import "./style.css";
import "./header.css";
import { data } from "../public/fma-data.ts";
import { CharactersRatings } from "./Character-ratings.tsx";
import { CharactersCards } from "./Character-cards.tsx";

export const App = () => (
  <>
    <CharactersRatings characters={data} />
    <CharactersCards FMAcharacters={data} />
  </>
);
