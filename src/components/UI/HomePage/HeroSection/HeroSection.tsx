import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import gridImage from "@/assets/svgs/grid.svg";
import arrowImage from "@/assets/svgs/arrow.svg";
import doctor1Image from "@/assets/images/doctor1.png";
import doctor2Image from "@/assets/images/doctor2.png";
import doctor3Image from "@/assets/images/doctor3.png";
import stethoscopeImage from "@/assets/images/Stetoscope.png";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            left: "-90px",
            top: "-120px",
          }}
        >
          <Image src={gridImage} alt="doctor1" />
        </Box>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography sx={{ my: 4 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eum
          iusto consequatur eius, doloribus nesciunt facere aliquid eveniet et.
          Rerum maiores saepe cupiditate repellat recusandae atque sed. Saepe,
          vitae id?
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make appointment</Button>
          <Button
            variant="outlined"
            sx={{
              color: "primary.main",
            }}
          >
            Contact us
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
          }}
        >
          <Image src={arrowImage} width={100} height={100} alt="arrow" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image src={doctor1Image} width={240} height={380} alt="doctor1" />
          </Box>
          <Box>
            <Image src={doctor2Image} width={240} height={350} alt="doctor2" />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image src={doctor3Image} width={240} height={240} alt="doctor3" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: "-1",
          }}
        >
          <Image
            src={stethoscopeImage}
            width={180}
            height={180}
            alt="doctor3"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
