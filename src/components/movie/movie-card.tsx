"use client";

import { MovieProps } from "@/interface";
import { LocalOffer, Share, Star, ThumbUp } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const CustomHeader = styled(CardHeader)(() => ({
  " > div > span ": {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
}));

interface MovieCardProps {
  movie: MovieProps;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  if (!movie) return null;
  return (
    <MotionCard
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: movie.id * 0.08, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
    >
      <Tooltip title={movie.title} placement="top">
        <Box>
          <CustomHeader
            title={movie.title}
            subheader={movie.genres.split(",").map((item, idx) => (
              <Chip
                icon={<LocalOffer />}
                variant="filled"
                color="primary"
                key={idx}
                sx={{ mt: 1, mb: 1, mr: 1 }}
                size="small"
                label={item}
              />
            ))}
          />
        </Box>
      </Tooltip>
      <Box sx={{ position: "absolute", ml: 2 }}>
        <Chip
          variant="filled"
          color="warning"
          sx={{ mt: 1 }}
          size="small"
          label={`${movie.time_minutes} min`}
        />
      </Box>
      <CardMedia
        sx={{
          objectFit: "initial",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        component="img"
        height="300"
        image={movie.image}
        alt={movie.title}
      />
      <CardContent>
        <Stack direction="row" sx={{ mt: 1, mb: 1 }} spacing={{ xs: 1, sm: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              mr: 2,
            }}
          >
            <Typography sx={{ mr: 0.5 }}>
              <Tooltip title="Star">
                <Star htmlColor="#c39400" fontSize="large" />
              </Tooltip>
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>{movie.rate}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              mr: 2,
            }}
          >
            <Typography sx={{ mr: 1 }}>
              <Tooltip title="Vote">
                <ThumbUp color="primary" />
              </Tooltip>
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>{movie.vote}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              flexGrow: 1,
            }}
          >
            <Typography sx={{ mr: 1 }}>
              <Tooltip title="Navigate">
                <IconButton
                  aria-label="settings"
                  href={movie.link}
                  target="_blank"
                >
                  <Share color="primary" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <Tooltip title="Director">
            <Typography sx={{ fontWeight: 500, color: blue[700] }}>
              {movie.director}
            </Typography>
          </Tooltip>
        </Box>
      </CardContent>
    </MotionCard>
  );
};

export default MovieCard;
