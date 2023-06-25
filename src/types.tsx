export type Character = {
  name: string;
  nickName: null | string;
  skillset: string[];
  votes: number;
  background: string;
  imageUrl: string;
};

export interface CharactersCardsProp {
  FMAcharacters: Character[];
}
