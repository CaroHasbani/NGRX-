
export interface MovieAPI {
  id:string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image:string;
  movie_banner:string;
  description: string;
  director: string;
  producer:string;
  release_date: number;
  running_time: number;
  rt_score: number;
  people: string [];
  species:string [];
  locations:string [];
  vehicles: [];
  url: string;
}

// export interface MoviesAPI{
//   results: MovieAPI[];
// }
