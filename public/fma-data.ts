type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

export const data: Character[] = [
  {
    name: "Alex Louis Armstrong",
    nickName: "Major Armstrong",
    skillset: ["Flawless Bodybuilding", "Stone Alchemy"],
    votes: 90,
    background:
      "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show",
    imageUrl:
      "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
  },
  {
    name: "Alfonse Elrich",
    nickName: null,
    skillset: ["Being Loveable, Alchemy"],
    votes: 110,
    background:
      "Alphonse is a walking suit of armor on a quest to find his real body",
    imageUrl:
      "https://static.wikia.nocookie.net/universe-of-smash-bros-lawl/images/1/19/Alphonse_Elric_Fullmetal_Alchemist.png/revision/latest?cb=20201121115928",
  },
  {
    name: "Edward Elrich",
    nickName: "The Fullmetal Alchemist",
    skillset: ["Human Transmutation", "Alchemy", "Being Short"],
    votes: 109,
    background:
      "Edward is a master alchemist and our main character... just don't call him short",
    imageUrl:
      "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png",
  },
  {
    name: "Greed",
    nickName: "Greed",
    votes: 45,
    skillset: ["Skin Hardening", "Homunculii"],
    imageUrl:
      "https://static.wikia.nocookie.net/villains/images/f/fd/20111222135943%21Greed.png/revision/latest?cb=20140901212536",
    background:
      "Greed is one of the seven deadly sins Homunculii. He's the most 'on our side' of all of them.",
  },
  {
    name: "Nina Tucker",
    nickName: null,
    skillset: ["Being Adorable", "Combining..."],
    votes: 80,
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/fullmetal-alchemist-nina-tucker.jpg",
    background:
      "Nina is an adorable little girl! If you've watched FMA you know...",
  },
  {
    name: "Riza Hawkeye",
    nickName: "Hawkeye",
    skillset: ["Loyal AF", "Sniper"],
    votes: 95,
    background:
      "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show",
    imageUrl:
      "https://static.wikia.nocookie.net/fma/images/2/26/Riza-profile.png/revision/latest?cb=20200710231139",
  },
  {
    name: "Solf J. Kimblee",
    nickName: "The Crimson Alchemist",
    votes: -9000,
    skillset: ["Being a piece of sh*t", "Alchemy"],
    background: "Kimblee suckkkkkssss, seriously he's not very nice",
    imageUrl:
      "https://static.wikia.nocookie.net/fullmetal-alchemist-database/images/9/94/SolfJKimbleeEp37.png/revision/latest/scale-to-width-down/290?cb=20121003101919",
  },
  {
    name: "Tim Marcoh",
    nickName: "Dr. Marcoh",
    votes: 40,
    skillset: ["Healing Alchemy", "Making Philospher Stones"],
    background:
      "Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong",
    imageUrl:
      "https://static.wikia.nocookie.net/fma/images/8/88/Marcoh.png/revision/latest?cb=20130321233603",
  },
  {
    name: "Winrey Rockbell",
    nickName: null,
    votes: 93,
    skillset: ["Automail Expert", "Delivering Babies"],
    background:
      "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there",
    imageUrl:
      "https://static.wikia.nocookie.net/thejusticeworld/images/8/85/800-by-600-366874-20090424144049.jpg/revision/latest?cb=20120415225041",
  },
];
