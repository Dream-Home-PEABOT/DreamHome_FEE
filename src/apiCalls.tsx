//export const cleanResponse = (character: FetchedCharacter): CleanedCharacter => {
//  return {
//    images: {
//      characterIcon: character.images.icon,
//      portrait: character.images.portrait,
//      seriesIcon: character.series.icon,
//    },
//    name: character.name,
//    seriesName: character.series.name,
//    tier: 0,
//    wins: 0,
//    losses: 0,
//    isMained: false
//  }
//}
//interface QuestionFormat {
//  images: {
//    characterIcon: string;
//    portrait: string;
//    seriesIcon: string;
//  };
//  name: string;
//  seriesName: string;
//  tier: number;
//  wins: number;
//  losses: number;
//  isMained: boolean;
//}
export const getUserSkins = () => {
  const url:string = "http://localhost:3000/data"
  return fetch(url).then(data => data.json())
}
