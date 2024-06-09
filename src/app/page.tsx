import { fetchMovies } from "@/app/api/movieApi";
import Hero from "@/components/hero";
import MovieCard from "@/components/movie/movie-card";
import MovieLoadMore from "@/components/movie/movie-load-more";
import { MovieProps } from "@/interface";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

export default async function Home() {
  const movieResponse = await fetchMovies(1);
  return (
    <Box>
      <Box>
        <Paper elevation={0} style={{ backgroundColor: "#aee2ff " }}>
          <Hero />
        </Paper>
      </Box>
      <Box>
        <Container maxWidth="md">
          <Typography component="h4" sx={{ fontSize: "2.5rem", mb: 4 }}>
            Movie List
          </Typography>
          <Box>
            <Grid
              container
              sx={{ display: "flex", alignItems: "center" }}
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 12, sm: 12, md: 12 }}
            >
              {movieResponse.data.map((movie: MovieProps) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4}>
                  <MovieCard movie={movie} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mt: 3 }}>
            <MovieLoadMore />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
