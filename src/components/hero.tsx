import CustomCarousel from "@/components/custom-carousel/custom-carousel";
import { Container } from "@mui/material";

function Hero() {
  return (
    <Container maxWidth="md" style={{ backgroundColor: "#aee2ff" }}>
      <CustomCarousel />
    </Container>
  );
}

export default Hero;
