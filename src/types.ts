export type Book = {
  _id: string;
  name: string;
};

export type Chapter = {
  _id: string;
  chapterName: string;
};

export type Movie = {
  _id: string;
  name: string;
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
};

export type Quote = {
  _id: string;
  movie: string;
  dialog: string;
  character: string;
};
