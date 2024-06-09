export interface MovieProps {
  id: number;
  link: string;
  title: string;
  time_minutes: number;
  genres: string;
  image: string;
  rate: number;
  vote: number;
  director: string;
}

export interface MoviePagination {
  _pape: number;
  _limit: number;
  _totalRows: number;
}

export interface MovieResponse {
  data: MovieProps[];
  pagination: MoviePagination;
}
