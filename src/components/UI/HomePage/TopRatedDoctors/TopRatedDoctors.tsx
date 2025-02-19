import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  // console.log(doctors);

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
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
        {/* Replacing Grid with Box using CSS Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2, // spacing between cards
          }}
        >
          {doctors?.map((doctor: any) => (
            <Card key={doctor.id}>
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                }}
              >
                <Image
                  src={doctor.profilePhoto}
                  alt="doctor"
                  width={500}
                  height={100}
                />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {doctor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {doctor.qualification}, {doctor.designation}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  <LocationOnIcon /> {doctor.address}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
              >
                <Button>Book Now</Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "primary.main",
                    // borderColor: "primary.main",
                  }}
                >
                  View Profile
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            variant="outlined"
            component={Link}
            href="/doctors"
            sx={{ color: "primary.main" }}
          >
            View ALL
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
