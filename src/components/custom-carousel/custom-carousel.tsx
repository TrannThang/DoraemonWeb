"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./custom-carousel.css";
import bannerList from "@/db/banner.json";
import { Box } from "@mui/material";
import Image from "next/image";

interface CarouselItemProp {
  src: string;
  name: string;
}

const CarouselItem = ({ src, name }: Readonly<CarouselItemProp>) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Image src={src} alt={name} width={500} height={300} />
    </Box>
  );
};

export default function CustomCarousel() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
      {bannerList.map((item) => (
        <CarouselItem key={item.id} src={item.src} name={item.name} />
      ))}
    </Carousel>
  );
}
