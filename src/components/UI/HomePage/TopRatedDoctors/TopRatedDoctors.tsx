import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  console.log(doctors);
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        // clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0 75%)',
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>

      <Container sx={{ margin: "30px auto" }}>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              marginTop: "20px",
              color: "primary.main",
            }}
            component={Link}
            href="/doctors"
          >
            View ALL
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
