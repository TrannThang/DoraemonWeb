"use server";

import { MovieResponse } from "@/interface";

export const fetchMovies = async (page: number) => {
  const response = await fetch(
    `https://tta-js-post.onrender.com/api/doreamon?_limit=6&_page=${page}`
  );

  const movieResponse = (await response.json()) as MovieResponse;

  return movieResponse;
};
